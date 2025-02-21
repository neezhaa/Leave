import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import settings from '../assets/settings.svg';
import home from '../assets/home.svg';
import calendar from '../assets/calendar.svg';
import logOut from '../assets/log-out.svg';
import profilePicture from '../assets/profilePicture.svg';
import { useState } from 'react';

function Sidebar() {
    const [activeItem, setActiveItem] = useState("dashboard");


    const handleClick = (item) => {
        setActiveItem(item);
    };

    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        window.location.href = "/";
      };

    return (
        <div className="fixed flex flex-col w-fit items-center space-y-80 bg-white">
    <div className="flex flex-col items-center">
        <div className="flex items-center justify-center p-4">
            <img src={logo} alt="Logo" className="w-9 h-9" />
        </div>
        <ul className="flex flex-col space-y-1 w-full items-center">
            <li onClick={() => handleClick('dashboard')} className={`cursor-pointer w-full p-4 ${activeItem === 'dashboard' ? "bg-[#f0f5f9]" : ""}`}>
                <NavLink to="/dashboard" className='flex items-center justify-center'>
                    <img src={home} alt="Home" />
                </NavLink>
            </li>
            <li onClick={() => handleClick('calendrier')} className={`cursor-pointer w-full p-4 ${activeItem === 'calendrier' ? "bg-[#f0f5f9]" : ""}`}>
                <NavLink to="/calendrier" className='flex items-center justify-center'>
                    <img src={calendar} alt="Calendar" />
                </NavLink>
            </li>
            <li onClick={() => handleClick('settings')} className={`cursor-pointer p-4 ${activeItem === 'settings' ? "bg-[#f0f5f9]" : ""}`}>
                <NavLink to="/settings" className='flex items-center justify-center'>
                    <img src={settings} alt="Settings" />
                </NavLink>
            </li>
        </ul>
    </div>
    <div className="flex flex-col items-center mt-auto p-4 space-y-4">
        <button className="bg-transparent border-none cursor-pointer" onClick={handleLogout}>
            <img src={logOut} alt="Logout" />
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center cursor-pointer">
            <img src={profilePicture} alt="Profile" />
        </div>
    </div>
</div>

    );
}

export default Sidebar;
