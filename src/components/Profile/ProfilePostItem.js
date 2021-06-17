import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { HeartIcon, LogoutIcon } from '../../icons/Icon';

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}





export const ProfilePostItem = ({ postData }) => {
    console.log(postData);
    const firebase = useFirebase();
    const rootRef = firebase.database().ref('Timeline');

    const deletepost = () => {
        firebase.database().ref('/Timeline').child(postData.postKey).remove();
    };

    return (
        <article className="flex space-x-3 border-b border-gray-extraligth px-4 pt-3 pb-2" >
            <img className="w-11 h-11 rounded-full" src={postData.avatar} alt="Profile" />
            <div className="flex-1">
                <div className="flex  items-center text-sm">
                    <span className="ml-2 font-bold capitalize">{postData.name}</span>
                    <span className="ml-2">
                        {formatDate(postData.timestamp)}
                    </span>
                    <div className="flex space-x-1 cursor-pointer" onClick={() => deletepost()} >
                        <LogoutIcon />
                    </div>
                </div>
                <p className="mt-4 text-sm text-left ">
                    {postData.Content}
                </p>
                <div className="mt-1">
                    <IconButton size="small">
                        <Badge badgeContent={postData.star} color="secondary">
                            <HeartIcon />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </article >
    )
};
