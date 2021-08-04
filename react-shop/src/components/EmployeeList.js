import { useState } from 'react';
import Employee from './Employee';

const EmployeeList = ({list, callback})=>{
    // console.log(list);
    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleSearch = () => {
        list = list.filter((user) => user.name == name);
        console.log(list);
    }

    return(
        <div>
            <span>Search by Name</span>
            <div>
                <input type='text' onChange={handleNameChange}/>
                <button onClick={handleSearch}>Search</button>
            </div>
            {
                list.map((employee)=>{
                    return <Employee key={employee.id} {...employee} deletecallback={callback} />
                })
            }
        </div>
    )
}

export default EmployeeList;