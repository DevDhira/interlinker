import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BiLinkAlt} from 'react-icons/bi'
import {FiMenu, FiX} from 'react-icons/fi'


export default function Nav() {


  const [showMenu, setShowMenu] = useState(false)

  return (
   <div>
     <div className='w-auto lg:w-full flex px-5 py-3 justify-between items-center shadow' >
        <div  >
            <h1 className='text-xl flex items-center gap-2 font-bold ' > <BiLinkAlt className='text-xl' /> Interlinker </h1>
        </div>
        <div className="hidden lg:flex lg:gap-4">
            <Link to={'/'} >  Home </Link>
            <Link to={'/about'} >  About </Link>
            <Link to={'/feedback'} >  Feedback </Link>
        </div>

        <div className='flex flex-col lg:hidden ' >

         { showMenu 
         ?  <FiX onClick={()=> setShowMenu(!showMenu) } />
         :  <FiMenu onClick={()=> setShowMenu(!showMenu) } />
         }
                  
         
        </div>
        
    </div>
    <div className='flex items-center justify-end  relative' >
    <div className={`${showMenu ? '':'hidden'}  flex flex-col  gap-4 top-0 right-0 p-4 bg-green-600 `}>
            <Link className='text-white' to={'/'} onClick={()=> setShowMenu(!showMenu) } >  Home </Link>
            <Link className='text-white' to={'/about'} onClick={()=> setShowMenu(!showMenu) } >  About </Link>
            <Link className='text-white' to={'/feedback'} onClick={()=> setShowMenu(!showMenu) } >  Feedback </Link>
        </div>
    </div>
   </div>
  )
}
