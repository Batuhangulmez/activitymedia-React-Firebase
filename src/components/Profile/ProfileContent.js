import React from 'react'
import { ProfilePostList } from './ProfilePostList';

export const ProfileContent = () => {
    return (
        <main className=" flex flex-col  " style={{ flex: 3 }}>
            <ProfilePostList />
        </main>
    );
};

