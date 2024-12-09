import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

  
function Github() {
    const data = useLoaderData()
    

  return (
     <>
     <div className='bg-gray-700 text-4xl text-center text-white p-4'>
        
        <ul>
        <li>UserName:{data.login}</li>
        
        <li>Followers :{data.followers}</li>
        <li>Following:{data.following}</li>
        <li>Repo :{data.public_repos}</li>

        </ul>
       
            
        
     </div>
     </>
  )
}

export default Github

export const gitinfo= async()=>{
    const {user} = useParams()
    const res =fetch(`https://api.github.com/users/${user}`)
    return (await res).json();
}