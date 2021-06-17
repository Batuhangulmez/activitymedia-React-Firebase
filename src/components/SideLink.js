import React from 'react'
import { Link } from 'react-router-dom';

const SideLink = ({ name, Icon }) => {

    return (
        <li >
            <a
                className="block ">
                <div>
                    <div className="flex items-center border-primary-base hover:border-primary-ligth hover:text-primary-base transform hover:scale-105 transition duration-500 border rounded-tl-3xl rounded rounded-br-3xl pl-3 py-1 my-1.5">

                        <Icon />
                        <span className="ml-4 font-bold">{name}</span>
                    </div>
                </div>
            </a>

        </li >
    );
};

export default SideLink
