import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="varela">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;