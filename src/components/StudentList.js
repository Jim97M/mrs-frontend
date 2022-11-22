import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ManageService from '../services/ManageService';
import Employee from './Employee';

const StudentList = () => {
  
   const navigate = useNavigate();

   const [loading, setLoading] = useState(true);
   const [managers, setManagers] = useState(null);


   useEffect(() => {
     const fetchData = async () => {
         setLoading(true)
         try {
            const response = await ManageService.getAllManagers();
            setManagers(response.data);
         } catch (error) {
             console.log(error);
         }
         setLoading(false);
     };
    fetchData();
   }, []);
       

   const deleteManager = (e, id) => {
    e.preventDefault();
    ManageService.deleteManager(id).then((res) => {
      if (managers) {
        setManagers((prevElement) => {
          return prevElement.filter((manager) => manager.id !== id);
        });
      }
    });
  };

  return (
    <div className='container mx-auto my-8'>
     <div className='h-12'>
       <button onClick={() => navigate("/add")} className='rounded bg-slate-600 text-white px-6 px-2'>Add Employee</button>
     </div>
     <div className='flex shadow border-b'>
         <table className='min-w-full'>
             <thead className='bg-gray-50'>
                 <tr>
                     <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>First Name</th>
                     <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Last Name</th>
                     <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Email ID</th>
                     <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Actions</th>
                 </tr>
             </thead>
             {!loading && (
            <tbody className="bg-white">
                {managers.map((manager) => (
                <Employee
                  manager={manager}
                  deleteManage={deleteManager}
                  key={manager.id}></Employee>
              )) }
            </tbody>
          )}
         </table>
         
     </div>
    </div> 
  )
}

export default StudentList;