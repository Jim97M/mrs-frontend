import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import TournamentService from '../services/TournamentService';
import Tournament from './Tournament';

const TournamentList = () => {
  
   const navigate = useNavigate();

   const [loading, setLoading] = useState(true);
   const [tournaments, setTournaments] = useState(null);

   useEffect(() => {
     const fetchData = async () => {
         setLoading(true)
         try {
            const response = await TournamentService.getAllTournaments();
            setTournaments(response.data);
         } catch (error) {
             console.log(error);
         }
         setLoading(false);
     };
    fetchData();
   }, []);

   const deleteTournament = (e, id) => {
    e.preventDefault();
    TournamentService.deleteTournament(id).then((res) => {
      if (tournaments) {
        setTournaments((prevElement) => {
          return prevElement.filter((tournaments) => tournaments.id !== id);
        });
      }
    });
  };

  return (
    <div className='container mx-auto my-8'>
     <div className='h-12 flex space-x-20'>
       <button onClick={() => navigate("/addtournament")} className='rounded bg-slate-600 text-white px-6 px-2'>Add Tournament</button>

       <button onClick={() => navigate("/addstudent")} className='rounded bg-slate-600 text-white px-6 px-2'>Add Student</button>

       <button onClick={() => navigate("/addclub")} className='rounded bg-slate-600 text-white px-6 px-2'>Add Club</button>
       <button onClick={() => navigate("/employeelist")} className='rounded bg-slate-600 text-white px-6 px-2'>Managers</button>

       <button onClick={() => navigate("/studentlist")} className='rounded bg-slate-600 text-white px-6 px-2'>Students</button>

       <button onClick={() => navigate("/clublist")} className='rounded bg-slate-600 text-white px-6 px-2'>Clubs</button>
     </div>
     <div className='flex shadow border-b'>
         <table className='min-w-full'>
             <thead className='bg-gray-50'>
                 <tr>
                     <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Tournament Name</th>
                     <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Tournament Category</th>
                     <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Tournament Type</th>
                     <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Actions</th>
                 </tr>
             </thead>
             {!loading && (
            <tbody className="bg-white">
                {tournaments.map((tournament) => (
                <Tournament
                  tournament={tournament}
                  deleteTournament={deleteTournament}
                  key={tournament.id}></Tournament>
              )) }
            </tbody>
          )}
         </table>
     </div>
    </div> 
  )
}

export default TournamentList;
