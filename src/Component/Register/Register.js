import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';



const Register = () => {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [conpass,setconpass]=useState('')
    const [error,setError]=useState(null)
    const [createUserWithEmailAndPassword]=useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    
    const handlefrom=async(e)=>{
        e.preventDefault()
        if(password !== conpass){
            setError('Your password not mach')
            return;
        }
        await createUserWithEmailAndPassword(email,password)
        await updateProfile({ displayName:name})
        const check=await sendEmailVerification()
        if(check){
            alert("Hello,check your email")
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-[500px] max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <form onSubmit={handlefrom}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input onChange={(e)=>setname(e.target.value)} type="text" placeholder="user name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input onChange={e=>setemail(e.target.value)} type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" onChange={e=>setpassword(e.target.value)} placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="text" onChange={(e)=>setconpass(e.target.value)} placeholder="password" className="input input-bordered" />
                <h1 className='text-[red]'>{error}</h1>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <h1>Already Have a account <Link className='ml-2 text-[green]' to="/login">Log In</Link></h1>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;