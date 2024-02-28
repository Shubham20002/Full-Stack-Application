import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Updateitem() {
const {id}=useParams();
const navigate=useNavigate();
const [values,setValues]=useState({
  id:id,
  name:'',
  description:''
});
  useEffect(()=>{
    async function fetchData() {
      const response = await fetch("http://localhost:3000/getitems");
      const item = await response.json();
      console.log("item from get",item);
      const {items}=item;
      console.log(items);
      //storing quired object from array
      let data=items.filter((i)=>{
        if(i.id==id){
          return i;
        }
      })
      console.log(data[0].description);
      setValues({...values,name:data[0].name,description:data[0].description});
               
      }
      fetchData(); 
  },[]);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(values);
    const res = await fetch(`http://localhost:3000/updateitem/?id=${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(values),
    });
  navigate('/');
   

  }
  return (
    <>
   
<div style={{width:"70%", margin:"auto"}}>
           <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={values.name}
               onChange={(e)=>setValues({...values,name:e.target.value})} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Discription</Form.Label>
        <Form.Control type="text" value={values.description}
              onChange={(e)=>setValues({...values,description:e.target.value})}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  )
}
