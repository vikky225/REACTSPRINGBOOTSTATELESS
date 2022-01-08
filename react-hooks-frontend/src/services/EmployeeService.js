import axios from 'axios'
const EMPLOYEE_BEST_REST_API_URL ='http://localhost:8080/api/v1/employees';



class EmployeeService {
    
    getAllEmployees(){
        return axios.get(EMPLOYEE_BEST_REST_API_URL)
    }
    createEmployee(employee){
        console.log(employee);
       return axios.post(EMPLOYEE_BEST_REST_API_URL,employee);
    }


    getEmployeeById(employeeID){
        console.log(employeeID);
       return axios.get(EMPLOYEE_BEST_REST_API_URL + '/' + employeeID);
    }

    updateEmployee(employee,employeeID){
        console.log(employeeID,employee);
       return axios.put(EMPLOYEE_BEST_REST_API_URL + '/' + employeeID,employee);
    }

    deleteEmployee(employeeID){
        console.log("here is service emp id"+employeeID);
       return axios.delete(EMPLOYEE_BEST_REST_API_URL + '/' + employeeID);
    }
}

export default new EmployeeService();