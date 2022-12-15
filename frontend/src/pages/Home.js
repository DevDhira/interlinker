import React from 'react'
import { FiSettings,FiClock, FiShuffle } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='container w-full lg:w-5/6 mx-auto flex flex-col gap-10 justify-evenly h-full' >
            <div id="hero" className="w-full h-full bg-gradient-to-br from-green-300 to-purple-700 px-10 py-20 rounded-b-lg flex flex-col gap-5 items-center justify-center">
                <h1 className='w-full lg:w-2/4 text-center text-lg lg:text-3xl font-bold text-white leading-relaxed ' > Create Interlinks Between Blog Posts within Seconds.  </h1>

                <div className='flex gap-5 my-5' >
                    <Link to={'/interlink'} className='px-2 py-2 flex items-center text-sm lg:text-md lg:px-3 lg:py-3 rounded bg-green-600 text-white'> Get Started </Link>
                    <a href='#tutorial' className='px-2 py-1 flex items-center text-sm  lg:px-3 lg:py-3 rounded bg-white text-green-500'> How does it Work? </a>
                </div>

            </div>

            <div id="features" className="w-full h-full p-4 flex flex-col gap-5 items-center">
                <h1 className='text-2xl font-bold' > Why Interlinker? </h1>
                <div className="my-3 lg:flex lg:flex-row sm:flex-col sm:gap-6 sm:items-stretch lg:justify-evenly">

                    <div className='p-10 shadow rounded w-5/6 lg:w-3/12 flex flex-col gap-3 justify-evenly items-center' >

                        <FiShuffle className='text-3xl' />
        
                        <h1 className='text-xl font-bold text-center' > Less Complex </h1>
                        <hr />
                        <p className='w-full text-justify' > You don't need to find right keywords to link a specific post Interlinker Will Automatically finds Posts related to your keywords. </p>

                    </div>

                    <div className='p-10 shadow rounded w-5/6 lg:w-3/12 flex flex-col gap-3 justify-evenly items-center' >

                        
                        <FiSettings className='text-3xl '/>
                        <h1 className='text-xl font-bold text-center' > Automation </h1>
                        <hr />

                        <p className='w-full text-justify' > Interlinker builds the interlinks automatically which will save you lots of time on thinking of what to link where.Interlinker will do the magic </p>

                    </div>

                    <div className='p-10 shadow rounded w-5/6 lg:w-3/12 flex flex-col gap-3 justify-evenly items-center' >

                        <FiClock className='text-3xl ' />

                        <h1 className='text-xl font-bold text-center' > Productivity </h1>
                        <hr />

                        <p className='w-full text-justify' > It is annoying to think of links inbetween writing. Interlinker links right posts to right keywords here , Thus promotes Consistency  </p>

                    </div>



                </div>

            </div>

            <div id="tutorial" className="w-full h-full  flex flex-col gap-5 items-center">
                <h1 className='text-2xl font-bold' > Here is How it Works.... </h1>
                <hr className='my-3 bg-slate-600' />

               <div className='w-full h-3/6 lg:h-screen sm:flex sm:justify-center ' >
               <iframe
                    width="80%"
                    height="80%"
                    src={`https://www.youtube.com/embed/vndDsgKQOhI`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    className='sm:w-full ml-10 lg:mx-auto'
                />
               </div>
            </div>

            <div id='cta' className="w-full h-full py-4  flex items-center justify-center bg-green-600 rounded" >
                <div className='flex items-center justify-center' >
                    <h1 className='text-white text-sm lg:text-xl w-5/6' > With a few clicks, you can add links to related posts and improve the readability of your content and helps keep readers on your site for longer.</h1>
                </div>
                <div className='flex w-full lg:w-3/6 items-center justify-center' >
                        <Link to={'/interlink'} className='px-1 py-2 lg:px-10 lg:py-2 w-full lg:w-auto text-sm lg:text-md rounded bg-white text-green-500' > Get Started now </Link>
                </div>
            </div>
           

        </div>
    )
}
