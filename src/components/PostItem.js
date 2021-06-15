import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}



export const PostItem = ({ name, avatar, Content, timestamp }) => {


    return (
        <article className="flex space-x-3 border-b border-gray-extraligth px-4 py-3" >
            <img className="w-11 h-11 rounded-full" src={avatar} alt="Profile" />
            <div className="flex-1">
                <div className="flex  items-center text-sm">
                    <span className="ml-2 font-bold">{name}</span>
                    <span className="ml-2">
                        {formatDate(timestamp)}
                    </span>
                </div>
                <p className="mt-4 text-sm text-left ">
                    {Content}
                </p>





            </div>
        </article>
    )
};
