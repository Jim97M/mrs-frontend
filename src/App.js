import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import TournamentList from "./components/TournamentList";
import ClubList from "./components/ClubList";
import AddTournament from "./components/AddTournament";
import AddClub from "./components/AddClub";
import AddStudent from "./components/AddStudent";
import UpdateEmployee from "./components/UpdateEmployee";
import Navbar from "./components/Navbar";

const App = () => {
    return(
       <BrowserRouter>
         <Routes>
             <Route index element={<TournamentList />}/>
             <Route path="/employee" element={<EmployeeList />} />
             <Route path="/addtournament" element={<AddTournament />} />
             <Route path="/addemployee" element={<AddEmployee />} />
             <Route path="/addstudent" element={<AddStudent />} />
             <Route path="addclub" element={<AddClub />} />
             <Route path="/employeelist" element={<EmployeeList />} />
             <Route path="/studentlist" element={<TournamentList />} />
             <Route path="/clublist" element={<ClubList />} />
             <Route path="/edit/:id" element={<UpdateEmployee />} />
         </Routes>
       </BrowserRouter>
    );
};

export default App;
