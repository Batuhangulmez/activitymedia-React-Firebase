import React from 'react'
import { useSelector } from 'react-redux';
import { Divider } from '../Divider';
import { ProfilePostList } from './ProfilePostList';


export const ProfileContent = () => {
    const profile = useSelector(state => state.firebase.profile)
    const FBprofile = useSelector(state => state.firebase.auth)
    const [name, email, avatar] = [profile.name, FBprofile.email, profile.avatar];



    return (
        <main className=" flex flex-col border-r border-l " style={{ flex: 3 }}>
            <section className="flex flex-col py-3 items-center">
                <div className="border rounded-xl p-4 bg-gray-lightest shadow-md ">

                    <img className="w-16 h-16 rounded-xl mr-auto ml-auto"
                        src={avatar} alt="Profile" />
                    <div className="text-center uppercase font-bold mt-2">{name}</div>
                    <div className="text-center text-sm text-gray-600 mt-2 font-thin">{email}</div>
                </div>

            </section>
            <div className="text-center border-b-8 border-gray-ligth text-gray-dark rounded-3xl my-1 text-lg font-bold " >PAYLAŞIMLAR</div>
            <Divider />
            <ProfilePostList />
        </main>
    );
};

