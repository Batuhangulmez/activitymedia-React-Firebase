import React, { useState } from 'react'
import casemicelogo from "../images/casemice.png"
import SideLink from "../components/SideLink";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrnetChannel } from '../store/actions/channel';
import {
    HomeIcon,
    MessageIcon,
    ProfilIcon
} from "../icons/Icon";
import { UserBox } from '../components/UserBox';

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
    const dispatch = useDispatch();


    const setActiveChannel = (channel) => {
        dispatch(setCurrnetChannel(channel));
    };




    return (
        <div className="sticky top-0 h-screen flex flex-col justify-between w-72 px-2 " style={{ flex: 1 }}>
            <div>
                <div className="mb-1 mt-4 w-16 h-16 mr-auto ml-auto  ">
                    <img src={casemicelogo} alt="Casemice Logo" className="w-16 h-16 transform hover:scale-125 transition duration-500" />
                </div>
                <nav className="mb-4">
                    <ul>
                        {sideLink.map(({ name, icon }) => (
                            <div onClick={() => setActiveChannel({ name })}>
                                <SideLink
                                    key={name}
                                    name={name}
                                    Icon={icon}
                                />
                            </div>

                        ))}
                    </ul>
                </nav>
                <button className="bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200 ">Tweet</button>
            </div>
            <UserBox />
        </div>
    );
};
export default Sidebar;