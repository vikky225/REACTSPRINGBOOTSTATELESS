import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import {useNavigate,Link,useParams} from 'react-router-dom';

const AddEmployeeComponent = () => {


const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [emailId, setEmailId] = useState('')
const navigate = useNavigate();
let {id} = useParams();

const saveOrUpdateEmployee=(e)=> {

    e.preventDefault();
    const employee ={firstName,lastName,emailId}
console.log(id,e.target.value);
    if(id){

        EmployeeService.updateEmployee(employee,id).then(
            res=>{
                console.log("data is"+res.data)
                navigate('/employees')
            }
        ).catch(err=>{console.log(err)})
    }else {

        EmployeeService.createEmployee(employee).then(
            res=>{
                console.log(res.data)
                navigate('/employees')
            }
        ).catch(err=>{console.log(err)})

    }
   
}


useEffect(() => {

    
  EmployeeService.getEmployeeById(id).then(res=>{
      setFirstName(res.data.firstName)
      setLastName(res.data.lastName)
      setEmailId(res.data.emailId)
  }).catch(err=>{console.log(err)})
  
}, [])


const getTitle =()=>{
    if(id){
        return <h2 className="text-center" > Update Employee</h2>
    } else {
        return <h2 className="text-center" > Update Employee</h2>
    }
}
    return (
        <div>
           <div className="container">
               <div className="row"> 
               <div className= "card col-md-6 offset-md-3 offset-md-3">
                   {
                   getTitle()
                   
                   }
          
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                        <label className="form-label">First Name: </label>
                        <input type= "text" placeholder="Enter f name" name="firstName" className="form-control" value={firstName} onChange= {e=>setFirstName(e.target.value)}></input>

                        </div>
                        <div className="form-group mb-2">
                        <label className="form-label">Last Name: </label>
                        <input type= "text" placeholder="Enter L name" name="lastName" className="form-control" value={lastName} onChange= {e=>setLastName(e.target.value)}></input>

                        </div>
                        <div className="form-group mb-2">
                        <label className="form-label">First Name: </label>
                        <input type= "text" placeholder="Enter mail id" name="emailId" className="form-control" value={emailId} onChange= {e=>setEmailId(e.target.value)}></input>

                        </div>
                     <button className="btn btn-success" onClick ={e=>saveOrUpdateEmployee(e)}>Submit</button>
                     <Link to="/employees" className="btn btn-danger" >Cancel      </Link> 
                    </form>

                </div>
               </div>
               
               </div>

           </div>
        </div>
    )
}

export default AddEmployeeComponent;
