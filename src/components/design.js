//which renders a list of Itemcard components based on the product data provided in data.js
//displaying all items using itemcard
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Itemcard from './Itemcard';
import data from './data'

function design() {

  return (
    <>
      <h1 className='text-center mt-3'>ALL ITEMS</h1>
     <section className="py-4 container"> 
        <div className='row justify-content-center'> 
        {data.productData.map((item)=>{
           return(
            <Itemcard 
              img={item.img} 
              title={item.title} 
              description={item.description} 
              price={item.price} 
              item={item}
              key={item.id}/>
           )
        }
        )}
        </div> 
   </section> 
 </>  
  )  
}
export default design