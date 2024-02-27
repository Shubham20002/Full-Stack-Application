import React, { useEffect } from 'react';
import { useState } from 'react';
import Itemrender from './itemrender';


export default function Home() {
    const [itemsdata,setitemsdata]=useState([]);
    useEffect(()=>{
        async function fetchData() {
          const response = await fetch("http://localhost:3000/getitems");
          const item = await response.json();
          console.log("item from get",item);
          const {items}=item;
          setitemsdata(items);          
          }
          fetchData();  
    },[]);

   

    async function deleteitem(i){
      const res=await fetch(`http://localhost:3000/deleteitem/?id=${i}`,{
        method:"delete"
      });
      const itemsobj =await res.json();
      const {items}=itemsobj;
    setitemsdata(items);
      
      
    }
    // console.log(itemsdata);
    
  return (
    <>
    <div class="m-10 w-100 " >
   {itemsdata.map((i)=>(
    <Itemrender data={i} deleteitem={deleteitem}/>
    
   ))
}  
</div>  
    </>
  )
}
