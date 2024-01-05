import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-center  lg:flex justify-center">
                <ul className="menu menu-horizontal px-1">
                    <li ><Link to="/" className="text-blue-900 font-bold mx-2">All Contact</Link></li>
                    <li ><Link to="/Add_Contact" className="text-blue-950 font-bold mx-2">Add Contact</Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Header;