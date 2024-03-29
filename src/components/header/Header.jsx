import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2 className="text-3xl font-semibold">Simple Firebase Authentication</h2>
            <div className="flex gap-4 justify-center text-xl mt-6">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;