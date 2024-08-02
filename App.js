
import './App.css';
import React, { useState } from 'react';

function App() {
    const [name,setName] =useState("");
    const [allData,setallData] =useState([]);
    const [show,setShow] =useState(false);
    const [editIndex,seteditIndex] =useState();

    const handleAdd=()=>{
      if(name.length!==0){
        setallData(newData=>[...newData,name])
        setName("");
      }
    }
    const handleDelete=(index)=>{
      allData.splice(index,1)
      setallData([...allData])
    }
    const handleEdit =(i) =>{
      setName(allData[i])
      setShow(true)
    }
    const handleUpdate=()=>{
      
      setShow(false)
    }
  return (
   <div>
  <h1>Crud Operation Insert Read Create Update Delete</h1>
  <input value={name} onChange={(e)=>setName(e.target.value)}/>
  {!show?<button className='add'onClick={handleAdd}>Add</button>:
  <button className='update'onClick={handleUpdate}>Update</button>}
  {
    allData.map((val,i)=>
    <div>
      <h1>
        {val}
      </h1>
      <button className='edit'onClick={()=>handleEdit(i)}>Edit</button>
        <button className='delete' onClick={()=>handleDelete(i)}>Delete</button>
    </div>
    )
  }
   </div>
  );
}

export default App;
