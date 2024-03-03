import React from 'react'
import error from '../../Assets/images/error.svg'

export default function NotFound() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
        <img src={error} alt="" />
    </div>
  )
}
