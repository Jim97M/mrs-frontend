import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import TournamentList from "./components/TournamentList";
import ClubList from "./components/ClubList";
import StudentList from "./components/StudentList";
import AddTournament from "./components/AddTournament";
import Register from "./components/Register";
import Login from "./components/Login";
import AddClub from "./components/AddClub";
import AddStudent from "./components/AddStudent";
import UpdateEmployee from "./components/UpdateEmployee";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
    return(
       <BrowserRouter>
         <Routes>
             <Route index element={<Register />}/>
             <Route path="/login" element={<Login />} />
             <Route path="/employee" element={<EmployeeList />} />
             <Route path="/tournament" element={<TournamentList />} />
             <Route path="/addtournament" element={<AddTournament />} />
             <Route path="/addemployee" element={<AddEmployee />} />
             <Route path="/addstudent" element={<AddStudent />} />
             <Route path="addclub" element={<AddClub />} />
             <Route path="/employeelist" element={<EmployeeList />} />
             <Route path="/studentlist" element={<StudentList />} />
             <Route path="/clublist" element={<ClubList />} />
             <Route path="/edit/:id" element={<UpdateEmployee />} />
         </Routes>
       </BrowserRouter>
    );
};

export default App;
