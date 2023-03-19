import Button from "../Button/Button";


function Card({item,handleproduct,exsis}){
    const {id,name,price,img,seller,ratings}=item
    return (
        <div className='border-2 w-[285px] p-1 rounded-md'>
            <img className='w-full mb-2' src={img} alt="" />
           <h1 className='text-[20px] truncate' title={name}>{name}</h1>
           <h2>Price:${price}</h2>
           <h4>Seller : {seller}</h4>
           <h4>Rating :{ratings}</h4>
           {exsis(id) ? <Button  style=" bg-[green]  rounded-md py-2 text-white">Add to Cart</Button>:
            <Button handleclick={handleproduct} style="bg-[#197278]  rounded-md py-2 text-white">Add to Cart</Button>
            
        }
        </div>
    )
}

export default Card;