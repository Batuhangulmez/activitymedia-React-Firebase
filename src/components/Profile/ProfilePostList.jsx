import React from 'react'
import { useSelector } from 'react-redux';
import { useFirebaseConnect, isLoaded, isEmpty, useFirebase } from 'react-redux-firebase';

import { ProfilePostItem } from './ProfilePostItem';



export const ProfilePostList = () => {
    const firebase = useFirebase();
    const profile = useSelector(state => state.firebase.profile);
    const currentUser = useSelector(state => state.firebase.auth);
    const Post = useSelector((state) => state.firebase.profile.userPostKey);



    //

    let key = Post


    if (isEmpty(key)) {
        return "No Post..."
    }
    return (
        < div className=" max-w-max " >
            {
                key = Object.entries(Post).reverse(),
                key.map((key, index) => (
                    <ProfilePostItem {...key[1]} key={key} />
                ))
            }
        </div >
    )
};
