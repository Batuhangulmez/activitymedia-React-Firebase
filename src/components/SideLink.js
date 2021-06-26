import React from 'react'
import { Link } from 'react-router-dom';

const SideLink = ({ name, Icon }) => {
    /*
        style={{
            boxShadow: "1px 4px 5px 1px #000000"
        }}
    */
    return (
        <li className="py-1" >
            <a
                className="block  ">
                <div>
                    <div
                        className="flex justify-center shadow-xl items-center bg-gray-50  text-black  hover:text-tema-red transform hover:scale-105 transition duration-500  rounded-tl-3xl rounded rounded-br-3xl mx-16 py-1.5  my-1.5 space-x-4">

                        <Icon />
                        <span className=" font-bold">{name}</span>
                    </div>
                </div>
            </a>

        </li >
    );
};

export default SideLink
