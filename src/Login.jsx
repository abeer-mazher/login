import React, { useState } from 'react'
import Register from './Register'

function Login() {

    let [signup,setSignup]= useState(false);

  return (
    <div className='h-screen bg-slate-900 py-20'>
        <div className='bg-white w-[290px] sm:w-[350px] m-auto px-3 flex flex-col gap-5 py-5 rounded-sm'>
           <div><h1 className='text-center text-2xl font-bold'>{signup ? "Signup" : `Login`}</h1></div>

            <div className='w-full flex flex-col gap-2'>
                {signup ? <div><input className='w-full border px-2 py-1' type="text" placeholder='User Name'/></div> : <></>}
               <div><input className='w-full border px-2 py-1' type="email" placeholder='Email'/></div>
               <div><input className='w-full border px-2 py-1' type="password" placeholder='Password'/></div>
            </div>
            <div className='w-full'><button className='w-full text-1xl font-bold bg-slate-700 text-white py-2'>{signup ? "Signup" : `Login`}</button></div>
            <div className='flex justify-center'>
                <p className='text-center'>{signup ? "already have an account?" : `Not have an account?`}</p>
                <p onClick={()=>setSignup(!signup)} className='text-center text-slate-600 cursor-pointer'>{signup ? "Signup" : `Login`}</p>
            </div>
        </div>
    </div>
  )
}

export default Login