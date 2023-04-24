import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Employee from "./components/Employee";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Employee/>
      
      <Routes>
        <Route path="/home" element={<Home/>} />

        
      </Routes>
     
     
    </div>
  );
}

export default App;
