import React from 'react';
import { BiHomeAlt } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { VscGraph, VscSettingsGear } from "react-icons/vsc";
import { RiCalendarLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";



// import {ReactLogo} from "../image/"
const navItems = [
    {
        name: "Dashboard",
        icon: <BiHomeAlt />,
        link: "/"
    },
    {
        name: "Recruitment",
        icon: <BsPeople />,
        link: "/recruitment"
    },
    {
        name: "Onboarding",
        icon: <CgFileDocument />,
        link: "/onboarding"
    },
    {
        name: "Reports",
        icon: <VscGraph />,
        link: "/reports"
    },
    {
        name: "Calender",
        icon: <RiCalendarLine />,
        link: "/calender"
    },
    {
        name: "Settings",
        icon: <VscSettingsGear />,
        link: "/settings"
    }

]
const DashboardLayout = ({ children }) => {
    const location = useLocation();
    console.log(location);
    return (
        <div className="dashboard-layout">
            <nav className="side-nav-bar">
                <div className="logo-container">
                    <h3>Newton HR</h3>
                </div>
                <div className="nav-item-container">
                    {
                        navItems.map((navItem, index) => (
                            <Link to={navItem.link} key={index}>

                                <div className={`nav-item  ${navItem.link === location.pathname ? 'selected' : ''}`} >
                                    {navItem.icon}
                                    <label className="item-name">{navItem.name}</label>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className="svg-container">
                    <img src="../imageFolder/celebration.svg" alt="svg" />
                </div>
            </nav>
            <div className="main-container">
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout;