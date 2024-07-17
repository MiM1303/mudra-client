import { useEffect, useState } from "react";
import logo from "../assets/mudra_logo.png";
import "../Layout/DashboardStyles.css";
import useUserData from "../hooks/useUserData";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const [userData] = useUserData();
    console.log("in dashboard");
    return (
        <div>
            {/* MOBILE VERSION DRAWER AND CONTENT */}
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-[#F6BE4F] w-full lg:hidden">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <img src={logo} alt="" />
                        </label>
                    </div>
                    {/* <div className="mx-2 flex-1 px-2">Navbar Title</div> */}
                    {/* <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">
                        Navbar menu content here
                        <li><a>Navbar Item 1</a></li>
                        <li><a>Navbar Item 2</a></li>
                        </ul>
                    </div> */}
                    </div>
                    {/* Page content here */}
                    {/* Content */}
                </div>
                <div className="drawer-side z-10">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-[#F6BE4F] min-h-full w-fit p-4 pr-10">
                    {/* Sidebar content here */}
                    <div className="mb-12">
                        <Link to="dashboard"><img src={logo} alt="" className="h-[70px] w-[70px]"/></Link>
                        <li className="text-[#A90C0F] ml-3 font-extrabold text-xl">Mudra</li>
                    </div>
                    <li className="mobile-nav-options"> <Link to="dashboard/my-account">My Account</Link> </li>
                    <li className="mobile-nav-options"><a>Transactions </a></li>
                    <li className="mobile-nav-options"><a>Send Money </a></li>
                    <li className="mobile-nav-options"><a>Cash Out </a></li>
                    <li className="mobile-nav-options"><a>Cash In </a></li>
                    <div className="divider h-[2px] ml-4 bg-black"></div>
                    <li className="mobile-nav-options"><a>Log Out</a></li>
                    </ul>
                </div>
            </div>

            {/* DESKTOP VERSION */}
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-4 lg:p-20">
                    {/* Page content here */}
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"> */}
                    <div className="flex-1 lg:p-8">
                        <Outlet></Outlet>
                    </div>
                    {/* <div className="border-2 border-[#A90C0F] rounded-xl w-fit p-5">
                        <p className="text-xl font-bold mb-2">{userData.name}</p>
                        <p className="text-xl"><span className=" font-bold">Balance: </span>{userData.balance}</p>
                    </div> */}
                    {/* <div className="grid lg:grid-cols-3 mt-10 gap-20  border-2 border-[#A90C0F] rounded-xl p-10 w-fit">
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
                    </div> */}

                    {/* </label> */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-[#F6BE4F] text-base-content min-h-full w-80 p-4">
                    <div className="mb-12">
                        <Link to=""><img src={logo} alt="" className="h-20 w-20"/></Link>
                        <li className="text-[#A90C0F] ml-3 font-extrabold text-2xl">Mudra</li>
                    </div>
                    <li className="desktop-nav-options"> <NavLink to="my-account">My Account</NavLink> </li>
                    <li className="desktop-nav-options"><a>Transactions</a></li>
                    <li className="desktop-nav-options"><a>Send Money</a></li>
                    <li className="desktop-nav-options"><a>Cash Out</a></li>
                    <li className="desktop-nav-options"><a>Cash In</a></li>
                    <div className="divider h-[2px] mx-4 bg-black"></div>
                    <li className="desktop-nav-options"><a>Log Out</a></li>

                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;