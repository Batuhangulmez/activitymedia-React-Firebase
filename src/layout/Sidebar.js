import React, { useState } from 'react'
import casemicelogo from "../images/casemice.png"
import { Link } from 'react-router-dom'
import SideLink from "../components/SideLink";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentChannel } from '../store/actions/channel';
import {
    HomeIcon,
    MessageIcon,
    PencilIcon,
    ProfilIcon
} from "../icons/Icon";
import { UserBox } from '../components/UserBox';

const sideLink = [
    {
        ıd: '/',
        name: 'Home',
        icon: HomeIcon,
    },
    {
        ıd: '/Profile',
        name: 'Profile',
        icon: ProfilIcon,
    },
];

export const Sidebar = () => {
    const dispatch = useDispatch();
    const currentChannel = useSelector((state) => state.channels.currentChannel);


    const setActiveChannel = (channel) => {
        dispatch(setCurrentChannel(channel));
    };




    return (
        <div className="sticky top-0 h-screen flex flex-col justify-between w-72 px-2 " style={{ flex: 1 }}>
            <div className=" rounded-3xl my-2  bg-add-dark bg-opacity-40 shadow-xl border-add-dark border-2">
                <div className="mb-8 mt-4 w-16 h-16 mr-auto ml-auto  ">
                    <img src={casemicelogo} alt="Casemice Logo" className="w-16 h-16 transform hover:scale-125 transition duration-500" />
                </div>
                <nav className="mb-8">
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
                <div className="flex justify-center mb-4">
                    <Link onClick={() => setActiveChannel("Home")}
                        className="flex space-x-5 items-center justify-center shadow-xl bg-primary-base hover:bg-primary-dark rounded-tl-3xl rounded rounded-br-3xl text-white   py-3 px-8 w-9/12"><p><PencilIcon /></p><p> Gönderi Yaz</p></Link>
                </div>
            </div>
            <UserBox />
        </div>
    );
};
export default Sidebar;