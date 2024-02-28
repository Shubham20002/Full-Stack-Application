import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Additem() {
  const [formdata,setFormdata]=useState({});
  const [message,setmessage]=useState(null);
  const navigate = useNavigate();
  const handleChange=(e)=>{
    setFormdata({
      ...formdata,
      [e.target.id]:e.target.value
    })
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
        body:JSON.stringify(formdata),
      });
         setmessage(res.message);
         navigate('/');
    } catch (error) {
    
    }
  }
  return (
    <>
    

 <div style={{width:"70%",margin:'auto'}}>
           <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Id</Form.Label>
        <Form.Control type="text" id='id'
               onChange={handleChange}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>name</Form.Label>
        <Form.Control type="text"  id='name' onChange={handleChange} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" id="description" onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Item
      </Button>
    </Form>
</div>
           {message}
    </>
  )
}
