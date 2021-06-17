import React from 'react'
import {
    HomeIcon,
    MessageIcon,
    ProfilIcon
} from "../icons/Icon";

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


const Navbar = () => {
    return (
        <div className="sticky top-0 flex flex-row min-w-full justify-center items-center bg-primary-base py-1  text-gray-50">
            <a className="flex w-10 h-10 justify-center items-center cursor-pointer hover:bg-primary-dark rounded-full ">
                <HomeIcon />
            </a>
            <a className="flex w-10 h-10 justify-center items-center cursor-pointer hover:bg-primary-dark rounded-full">
                <MessageIcon />
            </a>
            <a className="flex w-10 h-10 justify-center items-center cursor-pointer hover:bg-primary-dark rounded-full ">
                <ProfilIcon />
            </a>
        </div>
    );
}


export default Navbar;
