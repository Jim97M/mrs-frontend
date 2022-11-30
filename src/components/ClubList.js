import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ClubService from '../services/ClubService';
import Club from './Club';

const ClubList = () => {
  
   const navigate = useNavigate();

   const [loading, setLoading] = useState(true);
   const [clubs, setClubs] = useState(null);

   useEffect(() => {
     const fetchData = async () => {
         setLoading(true)
         try {
            const response = await ClubService.getAllClub();
            setClubs(response.data);
         } catch (error) {
             console.log(error);
         }
         setLoading(false);
     };
    fetchData();
   }, []);
       
   const deleteClubs = (e, id) => {
    e.preventDefault();
    ClubService.deleteClub(id).then((res) => {
      if (managers) {
        setClubs((prevElement) => {
          return prevElement.filter((club) => club.id !== id);
        });
      }
    });
  };

  return (
    <div className='container mx-auto my-8'>
     <div className='h-12'>
       <button onClick={() => navigate("/addclub")} className='rounded bg-slate-600 text-white px-6 px-2'>Add Club</button>
     </div>
     <div className='flex shadow border-b'>
         <table className='min-w-full'>
             <thead className='bg-gray-50'>
                 <tr>
                     <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Club ID</th>
                     <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Club Name</th>
                     <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Club Description</th>
                     <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Club Type</th>
                     <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Actions</th>
                 </tr>
             </thead>
             {!loading && (
            <tbody className="bg-white">
                {clubs.map((club) => (
                <Club
                  club={club}
                  deleteClub={deleteClubs}
                  key={club.id}></Club>
              )) }
            </tbody>
          )}
         </table>
         
     </div>
    </div> 
  )
}

export default ClubList;