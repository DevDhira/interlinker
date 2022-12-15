import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link, useLocation } from 'react-router-dom';

export default function Result({result}) {
    const [content, setContent] = useState('')

    const location = useLocation()

    useEffect(() => {
        
       setContent(location.state.result)

    }, [location])
    

    return (
        <div className='w-full h-screen ' >
            <div className='w-1/2 mx-auto py-20 flex flex-col gap-3 items-center' >
                <h1 className='text-xl font-bold' > Interlinked Content </h1>
                

                <ReactQuill 
                theme="snow" 
                style={{ border  :'1px ', borderRadius: '5px' }}
                className='w-full h-72 rounded' 
                value={content} 
                onChange={setContent}
                placeholder='Paste Your Content Here'
                />

                <Link 
                className='px-3 py-2 mt-20 bg-green-500 text-white rounded'
                to={'/'} 
                > Interlink Another Post 
                </Link>
            </div>
        </div>
    )
}
