import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div>
      <p>
        Name : {task.name}{' '}
      </p>
      <p>
        Email Address : {task.emailAddress}{' '}
      </p>
      <p>
        Phone : {task.phone}{' '}
      </p>
      <p>
        Date_of_policy : {task.date_of_policy}{' '}
      </p>
      <p>
        Duration : {task.duration}{' '}
      </p>
      <p>
        Price : {task.price}{' '}
      </p>
    </div>
  )
}

export default Task
