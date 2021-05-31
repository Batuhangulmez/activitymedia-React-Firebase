import React from 'react'
import casemicelogo from "../images/casemice.png"
import SideLink from "../components/SideLink";
import {
    HomeIcon,
    MessageIcon,
    ProfilIcon
} from "../icons/Icon";

const sideLink = [
    {
        name: 'Home',
        icon: HomeIcon,
    },
    {
        name: 'Messages',
        icon: MessageIcon,
    },
    {
        name: 'Profile',
        icon: ProfilIcon,
    },
];

export const Sidebar = () => {
    return (
        <div className="flex flex-col justify-between w-72 px-2">
            <div>
                <div className="mb-1 mt-4 w-16 h-16 mr-auto ml-auto  ">
                    <img src={casemicelogo} alt="Casemice Logo" className="w-16 h-16 transform hover:scale-125 transition duration-500" />
                </div>
                <nav className="mb-4">
                    <ul>
                        {sideLink.map(({ name, icon }) => (
                            <SideLink key={name} name={name} Icon={icon} />
                        ))}
                    </ul>
                </nav>
                <button className="bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200 ">Tweet</button>
            </div>
            <div>Alt Taraf</div>
        </div>
    );
};
export default Sidebar;