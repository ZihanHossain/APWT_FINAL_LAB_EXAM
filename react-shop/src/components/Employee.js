import {Link} from 'react-router-dom';

const Employee = ({id, name, number, username, password, deletecallback})=>{
    return(
        <div className='user' style={{color:'red'}}>
            <h3>-----------</h3>
            <h3>ID: {id}</h3>
            <p>Name: {name}</p>
            <p>C. Number: {number}</p>
            <p>User Name: {username}</p>
            <p>Password: {password}</p>
            <button onClick={()=>deletecallback(id)}>Delete</button>
            <Link to={`/editemployee/${id}`}> Edit </Link>
        </div>
    );
}

export default Employee;