import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { HeartIcon, LogoutIcon } from '../icons/Icon';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}





export const PostItem = ({ postData }) => {
    const firebase = useFirebase();
    const currentUserUid = useSelector(state => state.firebase.auth.uid);
    const rootRef = firebase.database().ref('Timeline/');
    const starRef = firebase.database().ref('Timeline/' + postData.postKey + '/postData/star');

    //    postData.star.push(postData.userId)

    let arry = []
    /*  
   starRef.on('value', (snapshot) => {
        console.log("1", snapshot.val())
        for (let i = 0; i < snapshot.val().length; i++) {
            if (currentUserUid == snapshot.val()[i]) {
                console.log("i", i)
                console.log("val", snapshot.val()[i])
                console.log("ch,", starRef.child(i))
            }
        }
    });
       */
    /*  starRef.on('value', (snapshot) => {
          snapshot.val().map(index => arry.push(index))
  
      })
      */
    console.log(postData.star)

    const sendStar = () => {
        let controlNum = false;
        //  starRef.child(i).remove()
        for (let i = 0; i < 10; i++) {
            if (currentUserUid === postData.star[i]) {
                postData.star.splice(i, 1)
                controlNum = true;
            }
        }

        if (controlNum === false) {


            postData.star.push(currentUserUid)


        }
        const newData = {
            star: postData.star
        };
        rootRef.child(postData.postKey).child('postData').update(newData);
    }





    return (
        <article className="flex space-x-3 border-b border-gray-extraligth px-4 pt-3 pb-2" >
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
                <div className="mt-2">
                    <IconButton size="small" onClick={sendStar}>
                        <Badge badgeContent={postData.star.length - 1} color="secondary">
                            <HeartIcon />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </article >
    )
};
