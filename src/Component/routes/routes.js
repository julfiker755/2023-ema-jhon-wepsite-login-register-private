import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Errorpage from '../Errorpage/Errorpage';
import Home from '../Home/Home';
import Inven from '../Inven/Inven';
import Layout from '../Layout/Layout';
import LogIn from '../LogIn/LogIn';
import Order from '../Order/Order';
import { Privatepage } from '../Privatepage/Privatepage';
import Register from '../Register/Register';
import Shop from '../Shop/Shop';

const routes =createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<Errorpage/>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },{
                path:'shop',
                loader:async()=>{
                  return fetch("/fakedata.json")
                },
                element:<Shop></Shop>
            },{
                path:'/order',
                element:<Privatepage><Order></Order></Privatepage>
            },{
                path:'/inven',
                element:<Inven></Inven>
            },{
                path:'/login',
                element:<LogIn></LogIn>
            },{
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default routes;