import React, { useState, useEffect } from 'react'
import { useFirebase } from "react-redux-firebase";
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import casemicelogo from "../../images/casemice.png"
import { LoginContainer } from './LoginContainer'
import {
    PasswordIcon,
    EmailIcon,
    ProfilIcon
} from "../../icons/Icon";
import { data } from 'autoprefixer';




export const Login = () => {
    const { register, formState: { errors }, handleSubmit, setValue } = useForm();
    const firebase = useFirebase();

    const [fbErrors, setFbErrors] = useState([]);
    const [submitting, setSubmiting] = useState(false);




    const onSubmit = ({ email, password }, e) => {
        setSubmiting(true);
        setFbErrors([]);

        firebase.login({
            email, password
        })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                setFbErrors([{ message: error.message }])
            })
            .finally(() => {
                setSubmiting(false);
            })
    };

    const displayErrors = () => fbErrors.map((error, index) => <p key={index}>{error.message}</p>);


    return (
        <LoginContainer>
            <div className="flex flex-col  bg-white rounded-md p-11 shadow-2xl ">
                <div className="flex  bg-black mx-auto justify-center items-center">
                    <img src={casemicelogo} alt="Casemice Logo" className="absolute w-24 h-24 rounded-md bg-white p-2  -mt-11" />
                </div>



                <form className="flex flex-col w-80"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h2 className="mx-auto text-3xl mb-5">Giriş Yap</h2>
                    <label className="flex my-2 group">
                        <div className=" mr-2 group-hover:text-primary-base  "><EmailIcon /></div>
                        <input
                            type="email"
                            placeholder="Email Adresi"
                            name="email"
                            className="  bg-transparent w-full p-1 focus:outline-none border-b-2 border-gray-600  focus:border-primary-base "
                            onChange={(event, { name, value }) => {
                                setValue(name, value);
                            }}
                            {...register("email", {
                                required: true,
                            })}
                        />
                    </label>

                    <label className="flex my-2 group">
                        <div className="mr-2 group-hover:text-primary-base"><PasswordIcon /></div>
                        <input
                            type="password"
                            placeholder="Şifre"
                            name="password"
                            className="  bg-transparent w-full p-1 focus:outline-none border-b-2 border-gray-600 focus:border-primary-base"
                            onChange={(event, { name, value }) => {
                                setValue(name, value);
                            }}
                            {...register("password", {
                                required: true,
                                minLength: 3,
                            })}
                        />
                    </label>
                    <div className="flex flex-col justify-center items-center text-xs text-primary-base  ">
                        <p>
                            {errors.email && "Email adresi hatalı."}
                        </p>
                        <p>
                            {errors.password && "Şifrenizi yanlış girdiniz."}
                        </p>
                        {
                            fbErrors.length > 0 && (
                                <p className=" max-w-xs">{displayErrors()} </p>
                            )
                        }
                    </div>
                    <input className="mt-4 p-2  bg-primary-base hover:bg-primary-dark text-white hover:text-white border rounded-tl-3xl rounded-md rounded-br-3xl" type="Submit" value="Giriş Yap" disabled={submitting} />
                    <div className="mx-auto mt-4 ">Yeni misin?    <Link to="/signup" className="text-primary-base">Hesap Oluştur</Link></div>
                </form>

            </div>
        </LoginContainer>


    )
}
