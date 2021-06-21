import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Divider } from '../Divider';
import { ProfilePostList } from './ProfilePostList';
import Dialog from '@material-ui/core/Dialog';
import { useForm } from 'react-hook-form';


export const ProfileContent = () => {
    const profile = useSelector(state => state.firebase.profile)
    const FBprofile = useSelector(state => state.firebase.auth)
    const [name, email, avatar] = [profile.name, FBprofile.email, profile.avatar];
    const { register, formState: { errors }, handleSubmit, setValue } = useForm();


    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <main className=" flex flex-col border-r border-l " style={{ flex: 3 }}>
            <section className="flex flex-col py-3 items-center ">
                <div className="border border-gray-ligth rounded-xl p-4 bg-gray-lightest shadow-md ">

                    <img className="w-16 h-16 rounded-xl mr-auto ml-auto"
                        src={avatar} alt="Profile" />
                    <div className="text-center uppercase font-bold mt-2">{name}</div>
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
                    <form>
                        <h2>Profili Düzenle</h2>
                        <label> </label>
                    </form>
                </Dialog>
            </section>
            <div className="text-center shadow-lg border-gray-ligth rounded-b-3xl  my-1 text-lg font-bold " >PAYLAŞIMLAR</div>
            <Divider />
            <ProfilePostList />
        </main>
    );
};

