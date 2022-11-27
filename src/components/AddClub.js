import React, { useState } from 'react'
import ClubService from '../services/ClubService';

const AddClub = () => {
  const [club, setClub] = useState({
    id: "",
    name: "",
    category: "",
    type: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setClub({ ...club, [e.target.name]:value});
  }

  const saveClub = (e) => {
    e.preventDefault()
    ClubService.saveClub(club)
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
          <h1>Add Club</h1>
       </div>
       <div className='items-center justify-center h-14 my-4'>
         <label className='block text-gray-600 text-sm font-normal'>Club Name</label>
         <input
           type="number" 
           className="h-10 w-96 border mt-2 px-2 py-2"
           name='id'
           value={club.id}
           onChange = {(e) => handleChange(e)}
           />
       </div>
       <div className='items-center justify-center h-14 my-4'>
         <label className='block text-gray-600 text-sm font-normal'>Club Name</label>
         <input 
           type="text"
           className="h-10 w-96 border mt-2 px-2 py-2"
           name='name'
           value={club.name}
           onChange = {(e) => handleChange(e)}
           />
       </div>
       <div className='items-center justify-center h-14 my-4'>
         <label className='block text-gray-600 text-sm font-normal'>Club Description</label>
         <input 
           type="text"
           className="h-10 w-96 border mt-2 px-2 py-2"
           name='category'
           value={club.category}
           onChange = {(e) => handleChange(e)}
           />
       </div>
       <div className='items-center justify-center h-14 my-4'>
         <label className='block text-gray-600 text-sm font-normal'>Club Type</label>
         <input 
           type="text"
           className="h-10 w-96 border mt-2 px-2 py-2"
           name='type'
           value={club.type}
           onChange = {(e) => handleChange(e)}
           />
       </div>
       <div className='items-center justify-center h-14 my-4 w-full space-x-10 pt-4'>
         <button onClick={saveClub} className='rounded text-white font-semibold bg-green-500 hover:bg-green-700 px-6 py-2'>Save</button>
      
         <button className='rounded text-white font-semibold bg-red-500 hover:bg-red-700 px-6 py-2'>Clear</button>
       </div>
       
     </div>
    </div>
  )
}

export default AddClub;
