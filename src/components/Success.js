import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import './Success.css'

const Success = () => {
  const location = useLocation()
  const { formData } = location.state || {}

  if (!formData) {
    return (
      <div className='success-container'>
        <h2 className='success-header'>No data found</h2>
        <Link to='/' className='back-link'>
          Go back to form
        </Link>
      </div>
    )
  }

  return (
    <div className='success-container'>
      <h2 className='success-header'>Form Submitted Successfully</h2>
      <div className='success-details'>
        <p>
          <strong>First Name:</strong> {formData.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {formData.lastName}
        </p>
        <p>
          <strong>Username:</strong> {formData.username}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {formData.phoneNo}
        </p>
        <p>
          <strong>Country:</strong> {formData.country}
        </p>
        <p>
          <strong>City:</strong> {formData.city}
        </p>
        <p>
          <strong>PAN Number:</strong> {formData.panNo}
        </p>
        <p>
          <strong>Aadhar Number:</strong> {formData.aadharNo}
        </p>
      </div>
      <Link to='/' className='back-link'>
        Go back to form
      </Link>
    </div>
  )
}

export default Success
