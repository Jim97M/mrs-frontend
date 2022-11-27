import React, { useState } from 'react'
import TournamentService from '../services/TournamentService';

const AddTournament = () => {
  const [tournament, setTournament] = useState({
    id: "",
    name: "",
    description: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setTournament({ ...tournament, [e.target.name]:value});
  }

  const saveTournament = (e) => {
    e.preventDefault()
    TournamentService.saveTournament(tournament)
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
          <h1>Add Tournament</h1>
       </div>
       <div className='items-center justify-center h-14 my-4'>
         <label className='block text-gray-600 text-sm font-normal'>Tournament ID</label>
         <input
           type="text" 
           className="h-10 w-96 border mt-2 px-2 py-2"
           name='id'
           value={tournament.id}
           onChange = {(e) => handleChange(e)}
           />
       </div>
       <div className='items-center justify-center h-14 my-4'>
         <label className='block text-gray-600 text-sm font-normal'>Tournament Name</label>
         <input
           type="text" 
           className="h-10 w-96 border mt-2 px-2 py-2"
           name='name'
           value={tournament.name}
           onChange = {(e) => handleChange(e)}
           />
       </div>
       <div className='items-center justify-center h-14 my-4'>
         <label className='block text-gray-600 text-sm font-normal'>Tournament Description</label>
         <input 
           type="text"
           className="h-10 w-96 border mt-2 px-2 py-2"
           name='description'
           value={tournament.description}
           onChange = {(e) => handleChange(e)}
           />
       </div>
       <div className='items-center justify-center h-14 my-4 w-full space-x-10 pt-4'>
         <button onClick={saveTournament} className='rounded text-white font-semibold bg-green-500 hover:bg-green-700 px-6 py-2'>Save</button>
      
         <button className='rounded text-white font-semibold bg-red-500 hover:bg-red-700 px-6 py-2'>Clear</button>
       </div>
       
     </div>
    </div>
  )
}

export default AddTournament;
