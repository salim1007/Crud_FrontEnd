import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Edit = () => {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState(""); 
  const [employees, setUsers] = useState([]);

  async function editEmployee(employees) {
    setName(employees.name);
    setAddress(employees.address);
    setMobile(employees.mobile);
    setId(employees.id);
   
  }
    
  return (
    <div>
     <div className="container mt-4">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="employee_id"
              hidden
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
            <label>Employee Name</label>
            <input
              type="text"
              className="form-control"
              id="employeeName"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Employee Address</label>
            <input
              type="text"
              className="form-control"
              id="employeeAddress"
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label>Mobile</label>
            <input
              type="text"
              className="form-control"
              id="employeeMobile"
              value={mobile}
              onChange={(event) => {
                setMobile(event.target.value);
              }}
            />
          </div>

          <div>
          
            <button  className="btn btn-primary mt-4" >
              Register
            </button>
            <button className="btn btn-warning mt-4" onClick={()=>editEmployee(employees)} >
              Edit
            </button>
           
          </div>
        </form>
      </div>
    </div>
  )
}

export default Edit;