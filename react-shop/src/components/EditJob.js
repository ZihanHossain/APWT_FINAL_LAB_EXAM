import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const EditEmployee = ({callback}) => {

    const [cname, setCname] = useState('');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const {id:id} = useParams();

    const handleCNameChange = (e) => {
        setCname(e.target.value);
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSalaryChange = (e) => {
        setLocation(e.target.value);
    }

    const handleUserLocationChange = (e) => {
        setSalary(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        callback({id, cname, title, location, salary});
    }

    return(
        <div>
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
            <button onClick={onSubmit}><Link to='/joblist'>Edit</Link></button>
        </div>
    );
}

export default EditEmployee;