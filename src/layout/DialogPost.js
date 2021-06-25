import React, { useEffect, useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPost } from '../store/actions/post';
import { isEmpty, useFirebase } from 'react-redux-firebase';
import { PostComponent } from '../components/PostComponent';
import { CommetIcon } from '../icons/Icon';


const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}
//Content, avatar, avatar, name, postKey, star, timestamp, userId
export const DialogPost = (postData) => {
    const firebase = useFirebase()
    const currentUserId = useSelector((state) => state.firebase.auth.uid)
    const currentPost = useSelector((state) => state.post.currentPost);
    const userId = postData.userId;
    const postKey = postData.postKey;

    let controlCommet;
    if (!isEmpty(postData.commet))
        controlCommet = Object.entries(postData.commet);

    const [open, setOpen] = useState(false);
    const [commet, setCommet] = useState('');



    useEffect(() => {
        setOpen(true);
        console.log("deneme")
    }, [])


    const dispatch = useDispatch();
    const setActivePost = (post) => {
        dispatch(setCurrentPost(post));
    };

    const handleClose = () => {
        setOpen(false);
        setActivePost("")
    };



    const onSubmit = () => {
        if (!isEmpty(commet)) {
            const newCommet = {
                commetContent: '',
                userId: '',
                postKey: ''
            };
            newCommet.commetContent = commet;
            newCommet.userId = currentUserId;
            newCommet.postKey = postKey;
            const newCommetKey = firebase.database().ref('Timeline/' + postKey + '/postData').child('commet').push().key;
            firebase.database().ref('Timeline/' + postKey + '/postData').child('commet').child(newCommetKey).update(newCommet);
            firebase.database().ref('users/' + userId + '/userPostKey/' + postKey + '/postData/').child('commet').child(newCommetKey).update(newCommet);
        }
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <section style={{ minWidth: 600 }}>
                <main className=" flex flex-col  min-w-min mx-2 ">
                    <div className="font-bold text-xl border-b p-2">Gönderi</div>
                    <div className="shadow-lg border-gray-ligth rounded-b-3xl">

                        <article className="flex space-x-3  px-4 pt-3 pb-2  cursor-pointer">
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
                    </div>
                    <main className="flex flex-col ">
                        {
                            !isEmpty(controlCommet) ?
                                controlCommet.map((key, index) => (
                                    <PostComponent {...key} key={key} />
                                ))
                                : <p className="flex justify-center m-2 font-bold">Yorum Yok...</p>
                        }
                    </main>
                    <section className="px-2 border-t  border-gray-ligth rounded-t-3xl">
                        <label className="flex my-2 group">
                            <div className=" mr-2 group-hover:text-primary-base  "><CommetIcon /></div>
                            <textarea
                                type="text"
                                placeholder="Yorum Yaz"
                                name="commet"
                                className="  bg-transparent w-full p-1 focus:outline-none border-b-2 border-gray-600  focus:border-primary-base outline-none overflow-auto  resize-none"
                                onChange={e => setCommet(e.target.value)}
                                value={commet}

                                rows="1"

                            />
                        </label>
                        <div className="flex justify-end mb-2">
                            <button className=" hover:border-gray-dark border-gray-ligth  transform hover:scale-105 transition duration-500 border rounded-tl-3xl rounded rounded-br-3xl px-3 py-1
                                                  font-medium bg-gray-lightest shadow-md "
                                onClick={onSubmit}
                            >
                                Kaydet
                            </button>

                        </div>
                    </section>
                </main>

            </section>
        </Dialog >
    )
}
