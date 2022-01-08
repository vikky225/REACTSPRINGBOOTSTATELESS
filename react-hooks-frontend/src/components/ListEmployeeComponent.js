import React,{useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom'

export const ListEmployeeComponent = () => {

const [employees, setEmployees] = useState([])

   useEffect(() => {
   getAllEmployees();
   }, [])

  let getAllEmployees=()=>{
    EmployeeService.getAllEmployees().then(
        res=>{
            setEmployees(res.data)
            console.log(res.data);
        }
    ).catch(error=>{console.log(error);})

  }
  const deleteEmployee=(id)=>{
    EmployeeService.deleteEmployee(id).then(res =>{
        getAllEmployees();
    }).catch(err=>{console.log(err)})

   }
  

    return (
        <div className="container">
            <h2 className="text-center">List Employees</h2>
            <Link to ="/add-employee" className="btn btn-primary mb-2">Add employee</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                    <th>Employee Id</th>
                    <th>Emplopyee First Name</th>

                    <th>Emplopyee Last Name</th>
                    <th>Emplopyee Email Id </th>
                    <th>Action</th>

                    </tr>
                   

                </thead>
                <tbody>
                    {
                        employees.map(
                            employee => 
                            <tr key={employee.id}> 
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                            <td>
                                <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}>Update </Link>
                            </td>
                        
                              <td>
                              <button className="btn btn-danger" onClick = {()=>deleteEmployee(employee.id)}>Delete </button>
                                  </td>  
                       
                            </tr>

                     
                          
                           
                        )
                    }
                </tbody>

            </table>
            
        </div>
    )
}

export default ListEmployeeComponent;