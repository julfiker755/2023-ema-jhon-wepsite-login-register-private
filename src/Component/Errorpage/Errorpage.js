import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import Button from '../Button/Button';

const Errorpage = () => {
    let error = useRouteError();
    const navigate=useNavigate()
    return (
        <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
        <br />
        {error && (
          <div>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <p>{error.status}</p>
          </div>
        )}
        <Button style='bg-[green]' handleclick={()=>navigate("/")}>Go To Home page</Button>
      </div>
    );
};

export default Errorpage;