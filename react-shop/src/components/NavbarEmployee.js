import {Link} from 'react-router-dom';

const NavbarEmployee = ()=>{
    return(
        <div>
            <Link to='/employee'>Home</Link> |
            <Link to='/createjob'>Create New Job</Link> |
            <Link to='/joblist'>Job List</Link>
        </div>
    );
}

export default NavbarEmployee;