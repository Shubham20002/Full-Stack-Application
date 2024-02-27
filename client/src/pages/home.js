import React, { useEffect } from 'react';
import { useState } from 'react';
import Itemrender from './itemrender';
import Table from 'react-bootstrap/Table';

export default function Home() {
    const [itemsdata,setitemsdata]=useState([]);
    const [message,setmessage]=useState(null);
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
      const {items,message}=itemsobj;
    setitemsdata(items);
      setmessage(message)
      setTimeout(()=>{
        setmessage(null);
      },5000)
    }
    // console.log(itemsdata);
    
  return (
    <> 
    <div style={{width:"80%", margin:"auto", marginTop:"25px"}}>
    <Table striped bordered hover m-10>
    <thead>
   {itemsdata.map((i)=>(
    <Itemrender data={i} deleteitem={deleteitem}/>
   ))
}  </thead>
</Table>
</div>  
{message}
    </>
  )
}
