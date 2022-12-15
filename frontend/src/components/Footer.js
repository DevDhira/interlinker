import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='w-full mt-10 p-1 bg-gray-800 ' >
            <div className="w-1/2 flex gap-10">

                <div className='p-10 flex items-center justify-center' >
                    <h1 className='text-white text-2xl font-bold opacity-50' > Interlinker </h1>
                </div>
                <div className='flex gap-6 items-center justify-center' >
                    <Link to={'/'} className='text-white hover:text-green-400' > Home </Link>
                    <Link to={'/'} className='text-white hover:text-green-400' > About </Link>
                </div>
            </div>
        </div>
    )
}
