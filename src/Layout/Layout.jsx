import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar";


const Layout = () => {
    return (
        <>
           <Navbar></Navbar>
           <div className="min-h-[calc(100vh-540px)]">
            <Outlet></Outlet>
           </div>
        </>
    );
};

export default Layout;