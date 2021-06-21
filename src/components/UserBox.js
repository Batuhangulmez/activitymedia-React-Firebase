import React from 'react'
import { Profiler } from 'react';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase'
import { LogoutIcon } from '../icons/Icon'


export const UserBox = () => {
    const firebase = useFirebase();
    const profile = useSelector((state) => state.firebase.profile);
    const email = useSelector((state) => state.firebase.auth.email);

    const signOut = () => {
        firebase.logout();
    };


    return (
        <div className="flex justify-around items-center mb-6 hover:bg-primary-lightest cursor-pointer border rounded-tl-3xl transform transition-colors duration-200 rounded rounded-br-3xl py-2 px-4">
            <img className="w-11 h-11 rounded-full"
                src="https://pbs.twimg.com/profile_images/1147599003263148032/LbA5K3c4_400x400.jpg" alt="Profile" />
            <div className="flex flex-col ">
                <span className="font-bold text-sm capitalize ">{profile.name}</span>
                <span className="text-xs text-gray-dark">Ünvan</span>
            </div>
            <div className="flex space-x-1" onClick={() => signOut()} >
                <LogoutIcon />
            </div>

        </div>
    )
}
