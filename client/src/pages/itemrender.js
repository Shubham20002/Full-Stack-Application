import React from 'react';
import Table from 'react-bootstrap/Table';

export default function Itemrender(props) {
    const {id,name,description}=props.data;
    console.log(props.data);
  return (
    <div >
         <Table striped bordered hover m-10>
    <thead>
      <tr>
        <th>{id}</th>
        <th> {name}</th>
        <th>{description}</th>
        <th><button onClick={()=>props.deleteitem(id)}>delete</button></th>
      </tr>
    </thead>
  </Table>
    </div>
   
  )
}
