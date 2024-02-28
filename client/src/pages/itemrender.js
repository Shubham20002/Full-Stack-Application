import React from 'react';
import { Link } from 'react-router-dom';


export default function Itemrender(props) {
    const {id,name,description}=props.data;
   
  return (
      
      <tr>
        <th>{id}</th>
        <th> {name}</th>
        <th>{description}</th>
        <th><button onClick={()=>props.deleteitem(id)}>delete</button></th>
       <Link to={`/updateitem/${id}`}> <th><button >Update</button></th></Link>
      </tr>
   
  )
}
