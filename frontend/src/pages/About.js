import React from 'react'
import { Link } from 'react-router-dom'



export default function About() {
  return (
    <div className='flex flex-col h-screen items-center justify-start' >
      <div className='p-10 flex flex-col gap-3 items-center' >

        <h1 className='text-lg lg:text-2xl font-bold text-center' > About 🌟 </h1>
        <hr />
        <p className='w-5/6 lg:w-3/6 text-justify text-lg' > Interlinker is SEO tool which helps user to Interlink Content on the Same Wordpress Blog based on the provided keyword.
          This tool is currently in the development and it's online for your Feedback.   </p>
        <p className='w-5/6 lg:w-3/6 text-justify text-lg' >If you have any comments or found some errors in this tool. Please Don't forget to <Link className='text-green-600 hover:text-black font-semibold' to={'/feedback'} >provide your valuable Feedbacks !!</Link>  .</p>
        <div className='w-1/2 mx-auto flex flex-col justify-center items-center' >

          <h1 className='text-xl text-start mb-5' > Featured On </h1>
          <div>

            <a href="https://www.saashub.com/interlinker-rf-gd-status" className='flex gap-2 items-center' target="_blank" rel="noopener noreferrer">

              <img
                src="https://www.saashub.com/assets/logo-0e2fd88ddf6037c320ec67048e212de41474acba30966fe81ad404d849ae9687.png"
                className='h-8 w-8'
                alt=""
                height={'10%'}
              />
              <h1 className='font-bold' >SaaSHub</h1> </a>

          </div>
        </div>
      </div>



    </div>
  )
}
