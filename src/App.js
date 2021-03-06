import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import UpdateEmployee from "./components/UpdateEmployee";
import Navbar from "./components/Navbar";

const App = () => {
    return(
       <BrowserRouter>
         <Routes>
             <Route index element={<EmployeeList />}/>
             <Route path="/" element={<EmployeeList />} />
             <Route path="/add" element={<AddEmployee />} />
             <Route path="/list" element={<EmployeeList />} />
             <Route path="/edit/:id" element={<UpdateEmployee />} />
         </Routes>
       </BrowserRouter>
    );
};

export default App;
