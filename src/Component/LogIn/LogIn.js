import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase';

const LogIn = () => {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const location=useLocation()
    const navigate=useNavigate()
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail,error] = useSendPasswordResetEmail(auth);
    let from = location.state?.from?.pathname || "/";
    const handlefrom=async(e)=>{
        e.preventDefault()
        await signInWithEmailAndPassword(email,password)
        navigate(from, { replace: true })
    }
  
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-[500px] max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handlefrom}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" onChange={(e)=>setemail(e.target.value)} placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" onChange={(e)=>setpassword(e.target.value)} placeholder="password" className="input input-bordered" />
                <label className="label">
                    <span onClick={async()=>{
                         const success=await sendPasswordResetEmail(email)
                         if(success){
                          alert("Check your email")
                         }
                    }} className="label-text-alt link link-hover">Forgot password</span>
               </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <h1>Please,Register <Link className='ml-2 text-[green]' to="/register">Register</Link></h1>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogIn;