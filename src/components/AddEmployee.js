import { response } from 'express';
import React, { useState } from 'react'
import ManageService from '../services/ManageService';

const AddEmployee = () => {
  const [manage, setManage] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setManage({ ...manage, [e.target.name]:value});
  }

  const saveManage = (e) => {
    e.preventDefault()
    ManageService.saveManage(manage)
    .then((response) => {
      console.log(response);
    }).catch((error) =>{
      console.log(error);
    })
  }

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
      <div className='px-8 py-8'>
        <div className='font-thin text-2xl tracking-wider'>
          <h1>Add Manager</h1>
       </div>
       <div className='items-center justify-center h-14 my-4'>
         <label className='block text-gray-600 text-sm font-normal'>First Name</label>
         <input
           type="text" 
           className="h-10 w-96 border mt-2 px-2 py-2"
           name='firstName'
           value={manage.firstName}
           onChange = {(e) => handleChange(e)}
           />
       </div>
       <div className='items-center justify-center h-14 my-4'>
         <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
         <input 
           type="text"
           className="h-10 w-96 border mt-2 px-2 py-2"
           name='lastName'
           value={manage.lastName}
           onChange = {(e) => handleChange(e)}
           />
       </div>
       <div className='items-center justify-center h-14 my-4'>
         <label className='block text-gray-600 text-sm font-normal'>Email</label>
         <input 
           type="email"
           className="h-10 w-96 border mt-2 px-2 py-2"
           name='emailId'
           value={manage.emailId}
           onChange = {(e) => handleChange(e)}
           />
       </div>
       <div className='items-center justify-center h-14 my-4 w-full space-x-10 pt-4'>
         <button onClick={saveManage} className='rounded text-white font-semibold bg-green-500 hover:bg-green-700 px-6 py-2'>Save</button>
      
         <button className='rounded text-white font-semibold bg-red-500 hover:bg-red-700 px-6 py-2'>Clear</button>
       </div>
       
     </div>
    </div>
  )
}

export default AddEmployee