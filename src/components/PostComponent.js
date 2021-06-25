import React from 'react'
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
    user.on('value', snapshot => {
        name = snapshot.val().name
        avatar = snapshot.val().avatar
    });


    const deletepost = () => {
        firebase.database().ref('/Timeline/' + postKey + '/postData/commet/').child(commetID).remove();
        firebase.database().ref('users/' + userID + '/userPostKey/' + postKey + '/postData/commet/').child(commetID).remove();
    };

    return (
        <section>
            <main className="flex flex-row ">

                <div className="w-8 border-r-8 border-gray-dark" />
                <div className="flex space-x-3 px-4 pt-3 pb-2">

                    <img className="w-11 h-11 rounded-full" src={avatar} alt="Profile" />
                    <div className="flex-1">
                        <div className="flex  items-center text-sm">
                            <span className="ml-2 font-bold capitalize">{name}</span>

                        </div>
                        <p className="mt-4 text-sm text-left ">
                            {data.commetContent}
                        </p>
                    </div>
                    <div className="flex space-x-1 cursor-pointer" onClick={() => deletepost()} >
                        <CancelIcon />
                    </div>
                </div>

            </main>


        </section>
    )
}
