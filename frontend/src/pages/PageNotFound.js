import React from 'react'
import { FiAlertTriangle } from 'react-icons/fi'

export default function PageNotFound() {
  return (
    <div className='flex flex-col h-screen items-center justify-center' >
    <div className='p-10 h-full  flex flex-1 flex-col gap-3 justify-center items-center' >
   <FiAlertTriangle className='text-3xl' />
      <h1 className='text-lg lg:text-xl font-bold text-center' > 404 Not Found </h1>
      
    </div>



  </div>
  )
}
