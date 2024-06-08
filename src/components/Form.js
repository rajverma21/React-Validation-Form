import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  })

  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const validate = () => {
    const newErrors = {}
    if (!formData.firstName) newErrors.firstName = 'First Name is required'
    if (!formData.lastName) newErrors.lastName = 'Last Name is required'
    if (!formData.username) newErrors.username = 'Username is required'
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.password) newErrors.password = 'Password is required'
    if (!formData.phoneNo) newErrors.phoneNo = 'Phone Number is required'
    if (!/^\d+$/.test(formData.phoneNo)) newErrors.phoneNo = 'Phone Number can only contain numbers'
    if (!formData.country) newErrors.country = 'Country is required'
    if (!formData.city) newErrors.city = 'City is required'
    if (!formData.panNo) newErrors.panNo = 'Pan Number is required'
    if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar Number is required'
    if (!/^\d+$/.test(formData.aadharNo)) newErrors.aadharNo = 'Aadhar Number can only contain numbers'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validate()) {
      navigate('/success', { state: { formData } })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type='text'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type='text'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p>{errors.lastName}</p>}
      </div>
      <div>
        <label>Username:</label>
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        <button type='button' onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type='text'
          name='phoneNo'
          value={formData.phoneNo}
          onChange={handleChange}
        />
        {errors.phoneNo && <p>{errors.phoneNo}</p>}
      </div>
      <div>
        <label>Country:</label>
        <select name='country' value={formData.country} onChange={handleChange}>
          <option value=''>Select Country</option>
          <option value='India'>India</option>
          <option value='USA'>USA</option>
          <option value='Canada'>Canada</option>
          <option value='Australia'>Australia</option>
          <option value='United Kingdom'>United Kingdom</option>
          <option value='Germany'>Germany</option>
          <option value='France'>France</option>
          <option value='China'>China</option>
          <option value='Japan'>Japan</option>
          {/* Add more countries as needed */}
        </select>
        {errors.country && <p>{errors.country}</p>}
      </div>
      <div>
        <label>City:</label>
        <select name='city' value={formData.city} onChange={handleChange}>
          <option value=''>Select City</option>
          <option value='Mumbai'>Mumbai</option>
          <option value='New York'>New York</option>
          <option value='Toronto'>Toronto</option>
          <option value='Sydney'>Sydney</option>
          <option value='London'>London</option>
          <option value='Berlin'>Berlin</option>
          <option value='Paris'>Paris</option>
          <option value='Beijing'>Beijing</option>
          <option value='Tokyo'>Tokyo</option>
          {/* Add more cities as needed */}
        </select>
        {errors.city && <p>{errors.city}</p>}
      </div>
      <div>
        <label>Pan Number:</label>
        <input
          type='text'
          name='panNo'
          value={formData.panNo}
          onChange={handleChange}
        />
        {errors.panNo && <p>{errors.panNo}</p>}
      </div>
      <div>
        <label>Aadhar Number:</label>
        <input
          type='text'
          name='aadharNo'
          value={formData.aadharNo}
          onChange={handleChange}
        />
        {errors.aadharNo && <p>{errors.aadharNo}</p>}
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
