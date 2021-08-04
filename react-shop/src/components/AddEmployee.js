import {Link} from 'react-router-dom';
import { useState } from 'react';

const AddEmployee = ({callback})=>{

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleIdChange = (e) => {
        setId(e.target.value);
    }

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
                    Id:
                </label>
                <input type="number" onChange={handleIdChange}/>
                <br />
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
                <button onClick={onSubmit}>Add</button>
        </div>
    );
}

export default AddEmployee;