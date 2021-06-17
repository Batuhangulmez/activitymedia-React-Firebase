import React from 'react'
import { StarIcon } from '../icons/Icon';
import TextBox from '../components/TextBox';
import { Divider } from '../components/Divider';
import { PostList } from '../components/PostList';



export const Content = () => {
    return (
        <main className=" flex flex-col border-r border-l " style={{ flex: 3 }}>
            <header className=" bg-white flex justify-between items-center p-4 border-b border-gray-extraligth">
                <span className="font-bold text-xl">Home</span>
                <StarIcon />
            </header>
            <div className="flex px-4 py-3 space-x-4">
                <img className="w-11 h-11 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1147599003263148032/LbA5K3c4_400x400.jpg" alt="Profile" />
                <TextBox />
            </div>
            <Divider />
            <PostList />
        </main>
    );
};

export default Content;