import { Link } from "react-router";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">Book</a>
                </div>
                <div className="navbar-center flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Listed Books</a></li>
                        <li><Link to='404'>Pages to Read</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/'>
                        <div className="btn">Home</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;