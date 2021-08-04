import {Link} from 'react-router-dom';

const Job = ({id, cname, title, location, salary, deletecallback})=>{
    return(
        <div className='user' style={{color:'red'}}>
            <h3>-----------</h3>
            <h3>ID: {id}</h3>
            <p>Company Name: {cname}</p>
            <p>Job Title: {title}</p>
            <p>Job Location: {location}</p>
            <p>Salary: {salary}</p>
            <button onClick={()=>deletecallback(id)}>Delete</button>
            <Link to={`/editjob/${id}`}> Edit </Link>
        </div>
    );
}

export default Job;