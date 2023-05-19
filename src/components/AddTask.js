import { useState, useEffect } from 'react'
import axios from "axios";



const AddTask = ({ onAdd, setLoading }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const resetClientData = () => {
    return {
      "emailAddress": "",
      "duration": "",
      "date_of_policy": "",
      "phone": "",
      "name": "",
      "price": ""
    }
  }



  const [clientData, setClientData] = useState(resetClientData())

  const [input, setInput] = useState("")

  useEffect(() => {
    console.log('clientData == ', clientData)
  }, [clientData])

  const onSubmit = (e) => {
    setLoading(true)
    e.preventDefault()


    if (!text) {
      alert('Please add a task')
      return
    }

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://wqt2n05095.execute-api.ap-southeast-1.amazonaws.com/RetreivePolicyById?policyId=1683006174079',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log('Hello')

        onAdd(clientData)
        resetClientData()
        setText('')
        setDay('')
        setReminder(false)
        setLoading(false)
      })

      .catch(
        (error) => {
          alert('Blockchain network error!!')
          setLoading(false)
          console.log(error)
        }
      );
    /* 
     onAdd({ text, day, reminder })
     setText('')
     setDay('')
     setReminder(false)
     */
  }

  const handleChange = (e) => {
    setClientData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (

    (<form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Name</label>
        <input
          type='text'
          name="name"
          placeholder='name'
          value={clientData.name}
          onChange={(e) => {
            setText(e.target.value)
            handleChange(e)
          }
          }
        />
      </div>
      <div className='form-control'>
        <label>Email Adress</label>
        <input
          type='text'
          name="emailAddress"
          placeholder='xxx@xxx'
          value={clientData.emailAddress}
          onChange={(e) => {
            setDay(e.target.value)
            handleChange(e)
          }
          }
        />
      </div>
      <div className='form-control'>
        <label>Phone Number</label>
        <input
          type='text'
          name="phone"
          placeholder='1234567'
          value={clientData.phone}
          onChange={(e) => {
            setDay(e.target.value)
            handleChange(e)
          }
          }
        />
      </div>
      <div className='form-control'>
        <label>Date of Policy</label>
        <input
          type='text'
          name="date_of_policy"
          placeholder='YYYY,MM,DD'
          value={clientData.date_of_policy}
          onChange={(e) => {
            setDay(e.target.value)
            handleChange(e)
          }
          }
        />
      </div>
      <div className='form-control'>
        <label>Duration in number of years</label>
        <input
          type='text'
          name="duration"
          value={clientData.duration}
          placeholder=''
          onChange={(e) => {
            setDay(e.target.value)
            handleChange(e)
          }
          }
        />
      </div>
      <div className='form-control'>
        <label>Policy Premium in SGD</label>
        <input
          type='text'
          name="price"
          placeholder=''
          value={clientData.price}
          onChange={(e) => {
            setDay(e.target.value)
            handleChange(e)
          }
          }
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>)
    //(loading ? <InfinitySpin width='200' color="#4fa94d" /> : "")
  )
}

export default AddTask
