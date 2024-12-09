import React from 'react'
import { useParams } from 'react-router-dom'
 
function User() {
    const {id} = useParams()

  return (
     <>
    <div className='bg-gray-700 text-4xl text-center text-white p-4'>
    User: {id}
    </div>
     </>
  )
}

export default User