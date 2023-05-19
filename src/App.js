import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'

import { InfinitySpin } from 'react-loader-spinner'
//(loading ? <InfinitySpin width='200' color="#4fa94d" /> : "")


const App = () => {
  const [loading, setLoading] = useState(false)

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  // useEffect(() => {
  //   const getTasks = async () => {
  //     //const tasksFromServer = await fetchTasks()
  //     //setTasks(tasksFromServer)
  //   }

  //   getTasks()
  // }, [])



  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:3005/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3005/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Add Task
  const addTask = async (task) => {
    /*
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()
    
    setTasks([...tasks, data])
*/
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    console.log(task)
    console.log(newTask)
    setTasks([...tasks, newTask])

  }

  // Delete Task
  const deleteTask = async (id) => {
    // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method: 'DELETE',
    // })
    // //We should control the response status to decide if we will change the state or not.
    // res.status === 200
    //   ? setTasks(tasks.filter((task) => task.id !== id))
    //   : alert('Error Deleting This Task')
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    //  async (id) => {
    //   const taskToToggle = await fetchTask(id)
    //   const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    //   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    //     body: JSON.stringify(updTask),
    //   })

    //   const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? {} : task
      )
    )
  }

  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Routes>
          <Route
            path='/'
            element={
              <>

                {showAddTask && <AddTask onAdd={addTask} setLoading={setLoading} />}
                {tasks.length > 0 ?
                  (<Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder} />)
                  : (
                    'No Tasks To Show'
                  )}
                {
                  loading && <InfinitySpin width='200' color="#4fa94d" />
                }

              </>

            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
