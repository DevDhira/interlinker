import axios from 'axios';
import React, { useRef, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ReCAPTCHA from "react-google-recaptcha";


export default function Interlink() {

    const [url, setUrl] = useState('')
    const [keywords, setKeywords] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    
    const captcha = useRef()

    const [verifyHuman, setVerifyHuman] = useState(false);


    const onChange = (value) => {
          if(value){
            setVerifyHuman(true)
        }
    }

    const expire = () =>{
        captcha.current.reset()
    }

    const submitContent = () => {

        if (verifyHuman) {
            setLoading(true)
            const data = {
                website: url,
                keywords: keywords,
                post_content: content,
            }
           // setVerifyHuman(false)
            axios.post('http://127.0.0.1:8000/interlinker/', data)
                .then((response) => {
                    //console.log(response.data)
                    //setContent(response.data)
                    if(response.status !== 202){
                        setLoading(false)
                        setKeywords('')
                        setContent('')
                        setUrl('')
                        navigate('/result', { state: { result: response.data } })
                    }
                    else{
                        setLoading(false)
                        toast.warn(
                            'Please Provide Wordpress Website',
                            {
                                
                                position: "top-right",
                                autoClose:500,
                                
                                hideProgressBar: true,
            
                            }
                        )
                    }

                   

                })
                .catch((error) => {
                    setLoading(false)
                    console.log(error.data)
                })
        }
        else {
            toast.error(
                'Please Verify You are not a Robot',
                {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,

                }
            )
            expire()
        }

    }

    return (
        <div className='w-full h-full m-0' >
            <div className='w-full mx-0 lg:mx-auto py-20 flex flex-col gap-3 items-center' >
                <h1 className='text-xl font-bold' > Interlinker </h1>
                <form onSubmit={submitContent} className='flex flex-col p-5 items-center gap-4 sm:w-full lg:w-1/2' >
                    <input
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        type="text"
                        className='px-3 py-2  rounded w-full border outline-none focus:ring ring-green-100 text-slate-400 '
                        placeholder='Wordpress Blog URL , Eg : spiraltag.com'
                    />
                    <input
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        type="text"
                        className='px-3 py-2 rounded w-full border outline-none focus:ring ring-green-100 text-slate-400 '
                        placeholder='Keywords Seperated by Commas'
                    />

                    <ReactQuill
                        theme="snow"
                        style={{ border: '1px ', borderRadius: '5px' }}
                        className='w-full h-56 rounded'
                        value={content}
                        onChange={setContent}
                        placeholder='Paste Your Content Here'
                    />
                    <ReCAPTCHA
                    ref={captcha}
                    onExpired={expire}
                    className='mt-20 lg:mt-10'
                        sitekey="6LeeeyAjAAAAAEXMuGxjdUVbZbkZeHqpzdEDi5y2"
                        onChange={onChange}
                    />

                   {
                    verifyHuman 
                    ?
                <div>
                     {loading
                        ? <button type="button" className="px-3  py-2 my-5 bg-green-500 text-white rounded" disabled>
                            <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                            </svg>
                            Loading...
                        </button>
                        : <button
                            onClick={submitContent}
                            className='px-3 py-2 bg-green-500 my-5 text-white rounded'
                        >
                            Start Interlinking
                        </button>

                    }
                </div>
                    :
                    <button
                    disabled
                    className='px-3 py-2 bg-green-500 opacity-25 my-5 text-white rounded'
                >
                    Start Interlinking
                </button>
                   }

                </form>
                <ToastContainer />
            </div>
        </div>
    )
}
