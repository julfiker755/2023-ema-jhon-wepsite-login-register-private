import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { addToDb} from '../Fakebd/Fakebd';
import Card from './Card';

const Shop = () => {
    const shopdata=useLoaderData()
    const [cart,setcart]=useState([])
    const handleproduct=(pro)=>{
    const exsis=cart.find(item=>item.id == pro.id)
    let newCart;
     if(!exsis){
        pro.quantity=1;
        newCart=[...cart,pro]
     }else{
        const rest=cart.filter(Pro=>Pro.id !== pro.id);
        exsis.quantity=exsis.quantity+1
        newCart=[...rest,exsis]
     }
     setcart(newCart)
     addToDb(pro.id)
    }
    // exsis color item
    const exsisitem=(id)=>{
     const find=cart.filter(item=>item.id === id)
     return !!find.length
    }
    return (
        <div className='container mx-auto flex justify-between'>
        <div className='w-[1200px]'>
        <input type="text"  placeholder="Search your product" className="input input-bordered input-secondary w-full my-[20px]" />
        <div className='flex flex-wrap gap-2'>
          {shopdata.map(item=><Card exsis={exsisitem} handleproduct={()=>handleproduct(item)} key={item.id}  item={item}></Card>)}
        </div>
        </div>
        <div className='w-[300px] bg-[#7b2cbf] p-2 text-white'>
         <div className='sticky top-[80px]'>
            <Cart cart={cart}></Cart>
         </div>
        </div>
     </div>
    );
};

export default Shop;