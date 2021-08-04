import {Link} from 'react-router-dom';
import { useState } from 'react';

const AddJob = ({callback})=>{

    const [id, setId] = useState('');
    const [cname, setCname] = useState('');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');

    const handleIdChange = (e) => {
        setId(e.target.value);
    }

    const handleCNameChange = (e) => {
        setCname(e.target.value);
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleUserLocationChange = (e) => {
        setLocation(e.target.value);
    }

    const handleSalaryChange = (e) => {
        setSalary(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        callback({id, cname, title, location, salary});
    }

    return(
        <div>
                <label>
                    Id:
                </label>
                <input type="number" onChange={handleIdChange}/>
                <br />
                <label>
                    Company Name:
                </label>
                <input type="text" onChange={handleCNameChange}/>
                <br />
                <label>
                    Job Title:
                </label>
                <input type="text" onChange={handleTitleChange}/>
                <br />
                <label>
                    Job Location:
                </label>
                <input type="text" onChange={handleUserLocationChange}/>
                <br />
                <label>
                    Salary:
                </label>
                <input type="number" onChange={handleSalaryChange}/>
                <br />
                <button onClick={onSubmit}><Link to='/joblist'>Add</Link></button>
        </div>
    );
}

export default AddJob;