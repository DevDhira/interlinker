import axios from 'axios';
import React, { useRef, useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Feedback() {


  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')
  const captcha = useRef()
  const [loading, setLoading] = useState(false)

  const [verifyHuman, setVerifyHuman] = useState(false);
  const navigate = useNavigate()


  const onChange = (value) => {
    if (value) {
      setVerifyHuman(true)
    }
  }

  const expire = () => {
    captcha.current.reset()
  }

  const submitContent = (e) => {
    e.preventDefault()
    if (verifyHuman ) {
      setLoading(true)
      const data = {
        'email':email,
        'feedback':feedback,
      }
      // setVerifyHuman(false)
      axios.post('https://x8ki-letl-twmt.n7.xano.io/api:4eJUxU4d/interlinker_feedback',data )
        .then((response) => {
         // console.log(response.data)
          //setContent(response.data)
          setLoading(false)
          setEmail('')
          setFeedback('')
          toast.success(
            'Thanks For Your Feedback 🙏',
            {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
    
            }
          )
        
          //navigate('/')

        })
        .catch((error) => {
          setLoading(false)
          console.log(error)
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
      <div className='flex flex-col h-screen w-full items-center justify-start' >
        <div className='p-10 flex flex-col gap-3 items-center w-full' >
        <ToastContainer/>
          <h1 className='text-2xl font-bold text-center' > Feedback 🌟 </h1>
          <hr />
          <div className="w-6/6 lg:w-1/3 mx-auto flex flex-col gap-5 items-center justify-center">
            <input
              type="email"
              className='px-3 py-2 rounded border outline-none focus:ring ring-green-300 w-full'
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder='Email'
            />
            <textarea
              rows={5}
              cols={10}
              required
              className='p-2 border outline-none focus:ring ring-green-300 rounded w-full'
              value={feedback}
              onChange={(e)=>setFeedback(e.target.value)}
              placeholder='Feeback'
            />

           <div className='w-full flex items-center lg:justify-center' >
           <ReCAPTCHA
              ref={captcha}
              onExpired={expire}
              className='w-2/3 '
              sitekey="6LeeeyAjAAAAAEXMuGxjdUVbZbkZeHqpzdEDi5y2"

              onChange={onChange}
            />

           </div>
<div>
                     {loading
                        ? <button type="button" className="px-3 py-2 my-5 bg-green-500 text-white rounded" disabled>
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
                            Submit Feedback
                        </button>

                    }
                </div>
          </div>


        </div>



      </div>
    )
  }
