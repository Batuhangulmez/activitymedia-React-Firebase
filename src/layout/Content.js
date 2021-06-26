import React from 'react'
import { StarIcon } from '../icons/Icon';
import TextBox from '../components/TextBox';
import { Divider } from '../components/Divider';
import { PostList } from '../components/PostList';
import { useSelector } from 'react-redux';


export const Content = () => {
    const avatar = useSelector(state => state.firebase.profile.avatar)
    return (
        <main className=" flex flex-col  " style={{ flex: 3 }}>
            <header className=" bg-tema-yellow flex justify-between items-center p-4 rounded-2xl shadow-lg ">
                <span className="text-gray-50 font-bold text-xl">Home</span>
                <StarIcon />
            </header>
            <div className="flex w-11/12 mr-auto ml-auto px-4 py-3 space-x-4 shadow-lg bg-add-dark bg-opacity-40 border-add-dark rounded-bl-3xl rounded-br-3xl border-l-2 border-b-2 border-r-2">
                <img className="w-11 h-11 rounded-full"
                    src={avatar} alt="Profile" />
                <TextBox />
            </div>
            <PostList />
        </main>
    );
};


export default Content;