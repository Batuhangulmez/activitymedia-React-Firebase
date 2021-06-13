import React from 'react'
import { useSelector } from 'react-redux';
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { PostItem } from './PostItem';



export const PostList = () => {
    useFirebaseConnect([{ path: "Timeline" }])

    const Post = useSelector((state) => state.firebase.ordered.Timeline);

    if (!isLoaded(Post)) {
        return "Loading Post..."
    }
    if (isEmpty(Post)) {
        return "No Post..."
    }
    return (
        <div className="" >
            {
                Post.reverse().map(({ key, value }) => (
                    <PostItem {...value} key={key} />
                ))
            }
        </div>
    )
};

