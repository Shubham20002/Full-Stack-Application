import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Additem() {
  const [formdata,setFormdata]=useState({});
  const navigate = useNavigate();
  const handleChange=(e)=>{
    setFormdata({
      ...formdata,
      [e.target.id]:e.target.value
    })
    console.log(formdata);

  }
  
  const handleSubmit= async(e)=>{
    e.preventDefault();
    console.log(formdata);
    try {
     
      const res = await fetch('http://localhost:3000/additem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      });
      navigate('/');
    } catch (error) {
    
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
             
             <input
               type='text'
               placeholder='id'
               id='id'
               onChange={handleChange}
             />
             <input
               type='text'
               placeholder='name'
               id='name'
               onChange={handleChange}
             />
              <input
               type='text'
               placeholder='description'
               id='description'
               onChange={handleChange}
             />
       
             <button >
           submit
             </button>
             
           </form>
    </>
  )
}
