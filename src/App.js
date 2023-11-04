import Navigation from "./components/Navigation"
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import DashBoard from "./components/DashBoard";
import AddStudent from "./components/AddStudent";
import UpdateStudents from "./components/UpdateStudent";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/dashboard" element={<DashBoard/>}></Route>
        <Route path="/addNewStudent" element={<AddStudent />}></Route>
        <Route  path='/updateStaff/:id' element={<UpdateStudents/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
