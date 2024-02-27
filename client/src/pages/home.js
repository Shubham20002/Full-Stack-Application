import React, { useEffect } from 'react';
import { useState } from 'react';
import Itemrender from './itemrender';


export default function Home() {
    const [itemsdata,setitemsdata]=useState([]);
    useEffect(()=>{
        async function fetchData() {
          const response = await fetch("http://localhost:3000/getitems");
          const item = await response.json();
          const {items}=item;
          setitemsdata(items);          
          }
          fetchData();  
    },[itemsdata]);

    // const deleteitem=async(i)=>{
    //   await fetch(`http://localhost:3000/deleteitem/${i}`);


    // }

    async function deleteitem(i){
      const res=await fetch(`http://localhost:3000/deleteitem/?id=${i}`,{
        method:"delete"
      });
      console.log("delete");
      console.log(res);
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
