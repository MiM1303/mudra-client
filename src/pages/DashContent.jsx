import { NavLink } from "react-router-dom";
import useUserData from "../hooks/useUserData";
import { FaRegUser } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
// import { HiOutlineArrowLongDown } from "react-icons/hi2";
// import { HiOutlineArrowLongUp } from "react-icons/hi2";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";

const DashContent = () => {
    const [ userData ] = useUserData();
    return (
        <div>
            <div className="border-2 border-[#A90C0F] rounded-xl w-fit p-5">
                <p className="text-xl font-bold mb-2">{userData.name}</p>
                <p className="text-xl"><span className=" font-bold">Balance: </span>{userData.balance}</p>
            </div>
            <div className="grid lg:grid-cols-3 mt-10 gap-20  border-2 border-[#A90C0F] rounded-xl p-10 w-fit">
                <NavLink to="/dashboard/my-account" className="desktop-dashboard-content-options">
                    <div className=" desktop-dashboard-icons"><FaRegUser /></div>
                    <p>My Account</p>
                </NavLink>
                <div className="desktop-dashboard-content-options">
                    <div className=" desktop-dashboard-icons"><GrTransaction /></div>
                    <p>Transactions</p>
                </div>
                <div className="desktop-dashboard-content-options">
                    <div className=" desktop-dashboard-icons"><GiTakeMyMoney /></div>
                    <p>Send Money</p>
                </div>
                <div className="desktop-dashboard-content-options">
                    <div className=" desktop-dashboard-icons"><GiPayMoney /></div>
                    <p>Cash Out</p>
                </div>
                <div className="desktop-dashboard-content-options">
                    <div className=" desktop-dashboard-icons"><GiReceiveMoney /></div>
                    <p>Cash In</p>
                </div>
            </div>
        </div>
    );
};

export default DashContent;