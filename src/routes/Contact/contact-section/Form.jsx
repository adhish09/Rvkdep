import React, {useState, useReducer} from 'react'
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'
import axios from 'axios'

import './form.css'


const formReducer = (state, event) => {
  if (event.reset) {
    return {
      email: "",
      phone: "",
      name: "",
      message: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};


const formInputs = [
  { id: 'name', type: 'text', name:"name",label: 'Your name', placeholder: 'John Doe' },
  {
    id: 'tel',
    type: 'tel',
    name:"phone",
    label: 'Phone number',
    placeholder: '+01 234 567 8900',
  },
  {
    id: 'email',
    type: 'email',
    name:"email",
    label: 'Email address',
    placeholder: 'you@example.com',
  },
  {
    id: 'message',
    type: 'textarea',
    name:"message",
    label: 'Your message',
    placeholder: 'How can we help you? Or you us?',
  },
]

const Form = () => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };


    
  function handleSubmit(event) {
    // Submit form data to server
     axios.post('/api/contact/', formData)
    .then((response) => {
      alert("You have successfully contacted")
    })
    .catch((error) => {
     alert(error)
    });
  }

  return (
  <form className="form">
    <h2 className="form-h2">Send us a message</h2>

    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {input.label}

        {input.type === 'textarea' ? (
          <textarea className="form-textarea"  name={input.name}   onChange={handleChange} placeholder={input.placeholder} />
        ) : (
          <input
            className="form-input"
            name={input.name}
            type={input.type}
            onChange={handleChange}
            placeholder={input.placeholder}
          />
        )}
      </label>
    ))}

    <Icon className="form-submit" icon={sendCircle} onClick={handleSubmit}/>

    {/* <button className="form-submit" type="submit">
      Send message
    </button> */}
  </form>
  )
  }

export default Form
