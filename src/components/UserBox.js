import React from 'react'

export const UserBox = () => {
    return (
        <div className="flex justify-around items-center mb-6 hover:bg-primary-lightest cursor-pointer border rounded-tl-3xl transform transition-colors duration-200 rounded rounded-br-3xl py-2 px-4">
            <img className="w-11 h-11 rounded-full"
                src="https://pbs.twimg.com/profile_images/1147599003263148032/LbA5K3c4_400x400.jpg" alt="Profile" />
            <div className="flex flex-col ">
                <span className="font-bold text-sm  ">Batuhan Gülmez</span>
                <span className="text-xs text-gray-dark">@Batuhanngulmez</span>
            </div>
            <div className="flex space-x-1">
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
            </div>

        </div>
    )
}
