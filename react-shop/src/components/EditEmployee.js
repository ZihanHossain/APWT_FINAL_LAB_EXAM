import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const EditEmployee = ({callback}) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {id:id} = useParams();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    }

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        callback({id, name, number, username, password});
    }

    return(
        <div>
            <label>
                Name:
            </label>
            <input type="text" onChange={handleNameChange}/>
            <br />
            <label>
                Contact Number:
            </label>
            <input type="number" onChange={handleNumberChange}/>
            <br />
            <label>
                User Name:
            </label>
            <input type="text" onChange={handleUserNameChange}/>
            <br />
            <label>
                Password:
            </label>
            <input type="text" onChange={handlePasswordChange}/>
            <br />
            <button onClick={onSubmit}><Link to='/employeelist'>Edit</Link></button>
        </div>
    );
}

export default EditEmployee;