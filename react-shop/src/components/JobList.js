import { useState } from 'react';
import Job from './Job';

const JobList = ({list, callback})=>{
    // console.log(list);
    const [name, setName] = useState('');
    const [jlist, setJlist] = useState(list);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleSearch = () => {
        const data = list.filter((user) => user.name == name);
        setJlist(data);
    }

    return(
        <div>
            <span>Search by Name</span>
            <div>
                <input type='text' onChange={handleNameChange}/>
                <button onClick={handleSearch}>Search</button>
            </div>
            {
                list.map((job)=>{
                    return <Job key={job.id} {...job} deletecallback={callback} />
                })
            }
        </div>
    )
}

export default JobList;