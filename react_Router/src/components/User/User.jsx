import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
const { userid } = useParams()
  return (
    <div className='text-center bg-gray-500 text-white py-6 mx-auto h-full'>User: {userid}</div>
  )
}

export default User