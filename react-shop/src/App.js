import './App.css';
import Navbar from './components/Navbar';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import EditEmployee from './components/EditEmployee';
import NavbarEmployee from './components/NavbarEmployee';
import AddJob from './components/AddJob';
import JobList from './components/JobList';
import EditJob from './components/EditJob';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import { useFetch } from './components/useFetch';

function App() {

  const [employees, setEmployees] = useState([]);
  const [jobs, setJobs] = useState([{id: 1, cname: 'asd', title: 'asd'}]);

  const url = "http://127.0.0.1:8000/api/employeelist";
  useFetch(url, setEmployees);

  const addEmployee = (data) => {
    // const url = `http://127.0.0.1:8000/api/createemployee`;
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //       "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    setEmployees([...employees, data]);
  }

  const addJob = (data) => {
    setJobs([...jobs, data]);
  }

  const deleteEmployee = (id) => {
    const data = employees.filter((user) => user.id !== id);
    setEmployees(data);
  }

  const deleteJob = (id) => {
    console.log(id)
    const data = jobs.filter((job) => job.id !== id);
    setJobs(data);
  }

  const editEmployee = (employee) => {
    const data = employees.filter((user) => user.id != employee.id);
    setEmployees([...data, employee]);
  }

  const editJob = (job) => {
    const data = jobs.filter((job) => job.id != job.id);
    setJobs([...data, job]);
  }

  console.log(jobs);

  return (
    <Router>
      <Navbar />
      <NavbarEmployee />
      <Switch>
        <Route exact path='/'>
          <h2>Welcome Home</h2>
        </Route>
        <Route exact path='/createemployee'>
          <AddEmployee callback={addEmployee}/>
        </Route>
        <Route exact path='/employeelist'>
          <EmployeeList list={employees} callback={deleteEmployee}/>
        </Route>
        <Route path='/editemployee/:id'>
          <EditEmployee callback={editEmployee}/>
        </Route>
        <Route exact path='/employee'>
          <h2>Welcome Home Employee</h2>
        </Route>
        <Route exact path='/createjob'>
          <AddJob callback={addJob}/>
        </Route>
        <Route exact path='/joblist'>
          <JobList list={jobs} callback={deleteJob}/>
        </Route>
        <Route path='/editjob/:id'>
          <EditJob callback={editJob}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
