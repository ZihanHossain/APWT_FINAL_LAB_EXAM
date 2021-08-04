import {Link} from 'react-router-dom';

const Navbar = ()=>{
    return(
        <div>
            <Link to='/'>Home</Link> |
            <Link to='/createemployee'>Create New Employee</Link> |
            <Link to='/employeelist'>Employee List</Link>
        </div>
    );
}

export default Navbar;