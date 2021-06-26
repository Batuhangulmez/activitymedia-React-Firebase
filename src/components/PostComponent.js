import { Snackbar } from '@material-ui/core';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { CancelIcon, LogoutIcon } from '../icons/Icon';

export const PostComponent = (key) => {
    const commetID = key[0];
    const data = key[1];
    const userID = data.userId;
    const postKey = data.postKey;
    const firebase = useFirebase();
    const user = firebase.database().ref('users').child(userID)
    let avatar;
    let name;

    const [DeleteMsg, setDeleteMsg] = useState(false);

    user.on('value', snapshot => {
        name = snapshot.val().name
        avatar = snapshot.val().avatar
    });
    const currentId = useSelector(state => state.firebase.auth.uid)

    const deletepost = () => {
        firebase.database().ref('/Timeline/' + postKey + '/postData/commet/').child(commetID).remove();
        firebase.database().ref('users/' + userID + '/userPostKey/' + postKey + '/postData/commet/').child(commetID).remove();
        handleOpen();
    };

    const handleOpen = () => {
        setDeleteMsg(true);
    }

    const handleClose = () => {
        setDeleteMsg(false);

    }
    return (
        <section>
            <main className="flex flex-row  " style={{ width: 576 }}>

                <div className="w-3 ml-4 border-r-8 border-gray-dark" />
                <div className="flex  space-x-3 px-4 pt-3 pb-2 " style={{ width: 550 }}>

                    <img className="flex w-11 h-11 rounded-full" src={avatar} alt="Profile" />
                    <div className="flex-1">
                        <div className="flex  items-center text-sm">
                            <span className="ml-2 font-bold capitalize">{name}</span>

                        </div>
                        <p className="mt-4 text-sm text-left ">
                            {data.commetContent}
                        </p>
                    </div>
                    {
                        userID == currentId ?
                            <div className="flex space-x-1 cursor-pointer" onClick={() => deletepost()} >
                                <CancelIcon />
                            </div> : null
                    }
                </div>

            </main>

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={DeleteMsg}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Post silme işlemi tamamlandı"
            />
        </section>
    )
}
