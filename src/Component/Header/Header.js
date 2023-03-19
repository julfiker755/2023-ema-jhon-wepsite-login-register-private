import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/Logo.png'
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import auth from '../../Firebase/Firebase';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import Button from '../Button/Button';

const Header = () => {
    const [mobile,setmobile]=useState(false)
    const [signOut] = useSignOut(auth);
    const [user] = useAuthState(auth);
    return (
        <div className='bg-[#2C2C2C] text-white py-3 sticky top-0'>
           <div className='container mx-auto flex justify-between items-center relative'>
           <h1><Link to="/"><img src={logo}/></Link></h1>
           {/* laptop use */}
           <ul className='hidden md:flex space-x-5 items-center'>
             <li><Link to="/shop">Shop</Link></li>
             <li><Link to="/order">Order Review</Link></li>
             <li><Link to="/inven">Manage Inventory</Link></li>
             <li>{user ? <Button 
             handleclick={()=>signOut()}
              style='w-[100px] bg-[purple] p-0'>Log Out</Button>:<Link to="/login">Login</Link>}</li>
              <li>{user && user.displayName}</li>
           </ul>
           {/* how to phone use */}
           <ul className={`${mobile ? 'block space-y-3 fixed bg-[#196586] text-white left-0 top-[65px] w-[50%] h-full p-2 transition delay-150  md:hidden':'left-[-1000px] transition block space-y-3 fixed bg-[#196586] text-white  top-[65px] w-[50%] h-full p-2 md:hidden'}`}>
           <li><Link to="/shop">Shop</Link></li>
             <li><Link>Order Review</Link></li>
             <li><Link>Manage Inventory</Link></li>
             <li><Link>Login</Link></li>
           </ul>
           {/* close button */}
           <div onClick={()=>setmobile(!mobile)} className='block md:hidden cursor-pointer'>
            {mobile ? <AiFillCloseCircle size={30}></AiFillCloseCircle>: <AiOutlineMenu size={30}></AiOutlineMenu>  }
           </div>
           </div>
        </div>
    );
};

export default Header;