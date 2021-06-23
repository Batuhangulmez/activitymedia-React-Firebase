import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Divider } from '../Divider';
import { ProfilePostList } from './ProfilePostList';
import Dialog from '@material-ui/core/Dialog';
import {
    TitleIcon,
    EmailIcon,
    ProfilIcon
} from "../../icons/Icon";
import { isEmpty, useFirebase } from 'react-redux-firebase';
import Snackbar from '@material-ui/core/Snackbar';



export const ProfileContent = () => {
    const firebase = useFirebase();
    const profile = useSelector(state => state.firebase.profile)
    const FBprofile = useSelector(state => state.firebase.auth)
    const [name, email, avatar, title] = [profile.name, FBprofile.email, profile.avatar, profile.title];
    const [newUsername, setnewUsername] = useState('');
    const [newEmail, setnewEmail] = useState('');
    const [newTitle, setnewTitle] = useState('');
    const [open, setOpen] = useState(false)
    const [successful, setSuccessful] = useState(false)



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setnewUsername('');
        setnewTitle('');
        setSuccessful(false);
    };

    const newDataName = {
        name: ""
    };
    const newDataTitle = {
        title: ""
    };

    const onSubmit = () => {
        if (!isEmpty(newUsername)) {
            const [first, last] = newUsername.split(' ');
            newDataName.name = newUsername;
            firebase.database().ref('users/' + FBprofile.uid).update(newDataName);
            setnewUsername('');
            setSuccessful(true);
        }
        if (!isEmpty(newTitle)) {
            newDataTitle.title = newTitle;
            firebase.database().ref('users/' + FBprofile.uid).update(newDataTitle);
            setnewTitle('');
            setSuccessful(true);
        }
    };

    /*
   
           
   
       <label className="flex my-2 group">
             <div className=" mr-2 group-hover:text-primary-base  "><EmailIcon /></div>
             <textarea
                 type="text"
                 placeholder="Email"
                 name="newEmail"
                 className="  bg-transparent w-full p-1 focus:outline-none border-b-2 border-gray-600  focus:border-primary-base outline-none overflow-auto  resize-none"
                 onChange={e => setnewEmail(e.target.value)}
                 value={newEmail}
     
                 rows="1"
     
             />
         </label>
         */

    return (
        <main className=" flex flex-col border-r border-l " style={{ flex: 3 }}>
            <section className="flex flex-col py-3 items-center ">
                <div className=" border border-gray-ligth rounded-xl p-4 bg-gray-lightest shadow-md ">

                    <img className="w-16 h-16 rounded-xl mr-auto ml-auto"
                        src={avatar} alt="Profile" />
                    <div className="flex justify-center text-center uppercase font-bold mt-2">{name}<p className="text-xs font-light ml-2">{title}</p></div>
                    <div className="text-center text-sm text-gray-600 mt-2 font-thin">{email}</div>
                </div>

            </section>
            <section className="flex justify-end ">
                <button className=" hover:border-gray-dark border-gray-ligth  transform hover:scale-105 transition duration-500 border rounded-tl-3xl rounded rounded-br-3xl px-3 py-1 mr-2
                font-medium bg-gray-lightest shadow-md"
                    onClick={handleClickOpen}
                >
                    Profil Düzenle
                </button>
                <Dialog open={open} onClose={handleClose}>
                    <section className="p-5 space-y-4 bg-gray-lightest">
                        <h2 className="font-bold">Profili Düzenle</h2>
                        <label className="flex my-2 group">
                            <div className=" mr-2 group-hover:text-primary-base  "><ProfilIcon /></div>
                            <textarea
                                type="text"
                                placeholder="İsim,Soyisim"
                                className="  bg-transparent w-full p-1 focus:outline-none border-b-2 border-gray-600  focus:border-primary-base outline-none overflow-auto  resize-none"
                                onChange={e => setnewUsername(e.target.value)}
                                value={newUsername}
                                rows="1"

                            />
                        </label>

                        <label className="flex my-2 group">
                            <div className=" mr-2 group-hover:text-primary-base  "><TitleIcon /></div>
                            <textarea
                                type="text"
                                placeholder="Ünvan"
                                name="newTitle"
                                className="  bg-transparent w-full p-1 focus:outline-none border-b-2 border-gray-600  focus:border-primary-base outline-none overflow-auto  resize-none"
                                onChange={e => setnewTitle(e.target.value)}
                                value={newTitle}

                                rows="1"

                            />
                        </label>
                        <div className="flex justify-end">
                            <button className=" hover:border-gray-dark border-gray-ligth  transform hover:scale-105 transition duration-500 border rounded-tl-3xl rounded rounded-br-3xl px-3 py-1
                                                  font-medium bg-gray-lightest shadow-md "
                                onClick={onSubmit}
                            >
                                Kaydet
                            </button>

                        </div>


                    </section>
                </Dialog>
            </section>
            <div className="text-center shadow-lg border-gray-ligth rounded-b-3xl  my-1 text-lg font-bold " >PAYLAŞIMLAR</div>
            <Divider />
            <ProfilePostList />
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={successful}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Profil Bilgileri Kayıt Edildi"
            />

        </main>
    );
};

