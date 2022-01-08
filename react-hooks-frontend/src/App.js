
import './App.css';
import {BrowserRouter,Routes,Route,Switch} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
    <BrowserRouter>
   
      <HeaderComponent/>
          <div className="container">
            <Routes>
               <Route exact path = "/" element= {<ListEmployeeComponent/>}></Route>
               <Route  path = "/employees" element= {<ListEmployeeComponent/>}></Route>
               <Route path = "/edit-employee/:id" element= {<AddEmployeeComponent/>}></Route> 
               <Route path = "/add-employee" element= {<AddEmployeeComponent/>}></Route>
             
               {/* <Route path = "/view-employee/:id" element= {<ViewEmployeeComponent/>}></Route>
               */}
             
            </Routes>
          </div>
      <FooterComponent/>
    
    </BrowserRouter>
  </div>
  );
}

export default App;
