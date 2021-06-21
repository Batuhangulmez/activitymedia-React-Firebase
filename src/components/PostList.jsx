import React from 'react'
import { useSelector } from 'react-redux';
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { PostItem } from './PostItem';



export const PostList = () => {
    useFirebaseConnect([{ path: "Timeline" }])
    const Post = useSelector((state) => state.firebase.data.Timeline);


    let key = Post;

    if (!isLoaded(key)) {
        return "Loading Post..."
    }
    if (isEmpty(key)) {
        return "No Post..."
    }
    return (
        <div className=" max-w-max " >
            {
                key = Object.entries(Post),
                key.reverse().map((key, value) => (
                    < PostItem {...key[1]} key={key} />
                ))
            }
        </div>
    )
};

