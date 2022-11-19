import React, { useState } from 'react'
import StudentService from '../services/StudentService';

const AddStudent = () => {
  const [student, setStudent] = useState({
    id: "",
    studentName: "",
    admNo: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setStudent({ ...student, [e.target.name]:value});
  }

  const saveStudent = (e) => {
    e.preventDefault()
    StudentService.saveStudent(student)
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
         <label className='block text-gray-600 text-sm font-normal'>Student Name</label>
         <input
           type="text" 
           className="h-10 w-96 border mt-2 px-2 py-2"
           name='Student Name'
           value={student.studentName}
           onChange = {(e) => handleChange(e)}
           />
       </div>
       <div className='items-center justify-center h-14 my-4'>
         <label className='block text-gray-600 text-sm font-normal'>Admission Number</label>
         <input 
           type="text"
           className="h-10 w-96 border mt-2 px-2 py-2"
           name='Admission Number'
           value={student.admNo}
           onChange = {(e) => handleChange(e)}
           />
       </div>
       <div className='items-center justify-center h-14 my-4 w-full space-x-10 pt-4'>
         <button onClick={saveStudent} className='rounded text-white font-semibold bg-green-500 hover:bg-green-700 px-6 py-2'>Save</button>
      
         <button className='rounded text-white font-semibold bg-red-500 hover:bg-red-700 px-6 py-2'>Clear</button>
       </div>
       
     </div>
    </div>
  )
}

export default AddStudent;
