import React from 'react';
import Table from 'react-bootstrap/Table';

export default function Itemrender(props) {
    const {id,name,description}=props.data;
   
  return (
   
         
      <tr>
        <th>{id}</th>
        <th> {name}</th>
        <th>{description}</th>
        <th><button onClick={()=>props.deleteitem(id)}>delete</button></th>
      </tr>
 
 
    
   
  )
}
