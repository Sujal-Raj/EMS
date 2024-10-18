import React, { useState } from 'react'
import FormHeader from '../OtherComponents/FormHeader';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault();
        
        console.log(email);
        console.log(password);
        
        setEmail("");
        setPassword("");
    }


  return (
    <>
    <FormHeader text="Login"/>
    <div className="form h-[80vh]  flex items-center justify-center ">
        <form
            onSubmit={submitHandler}
        className='border-2 border-emerald-500 rounded-lg w-[30%] m-auto flex flex-col items-center px-2 py-20'>
            <div className='w-[80%] m-2'>
                {/* <label htmlFor="email">Email: </label> */}
                <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                 required 
                 className=' text-black outline-none px-2 py-1 rounded-lg w-full font-semibold' type="email" name="" id="email" placeholder='Enter your email' />
            </div>
            <div className='w-[80%] m-2'>
                {/* <label htmlFor="email">Email: </label> */}
                <input
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className=' text-black outline-none px-2 py-1 rounded-lg w-full font-semibold' type="password" name="" id="email" placeholder='Enter your password' />
            </div>
            <div className='w-[80%] m-2 bg-emerald-500 flex items-center justify-center font-bold text-xl rounded-lg'>
                {/* <label htmlFor="email">Email: </label> */}
                <input className=' text-white outline-none px-2 py-2 rounded-lg w-full font-bold' type="submit" name="" id="email" placeholder='Enter your password' />
                {/* <button className='py-2'>Submit</button> */}
            </div>
        </form>
    </div>
    </>
  )
}

export default Login