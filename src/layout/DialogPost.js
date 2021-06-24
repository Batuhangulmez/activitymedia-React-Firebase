import React, { useEffect, useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPost } from '../store/actions/post';


const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}
//Content, avatar, avatar, name, postKey, star, timestamp, userId
export const DialogPost = (postData) => {
    const [open, setOpen] = useState(false)
    const currentPost = useSelector((state) => state.post.currentPost);


    useEffect(() => {
        setOpen(true);

    }, [])

    const dispatch = useDispatch();
    const setActivePost = (post) => {
        dispatch(setCurrentPost(post));
    };

    const handleClose = () => {
        setOpen(false);
        setActivePost("")
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <section style={{ minWidth: 600 }}>
                <main className=" flex flex-col border-r border-l min-w-min mx-2 ">
                    <div className="font-bold text-xl border-b p-2">Gönderi</div>
                    <article className="flex space-x-3  px-4 pt-3 pb-2 cursor-pointer">
                        <img className="w-11 h-11 rounded-full" src={postData.avatar} alt="Profile" />
                        <div className="flex-1">
                            <div className="flex  items-center text-sm">
                                <span className="ml-2 font-bold capitalize">{postData.name}</span>
                                <span className="ml-2">
                                    {formatDate(postData.timestamp)}
                                </span>
                            </div>
                            <p className="mt-4 text-sm text-left ">
                                {postData.Content}
                            </p>
                        </div>
                    </article >
                </main>
            </section>
        </Dialog >
    )
}
