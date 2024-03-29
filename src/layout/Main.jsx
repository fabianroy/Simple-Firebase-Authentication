import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';


const Main = () => {
    return (
        <div className="w-fit my-52 mx-auto text-center">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;