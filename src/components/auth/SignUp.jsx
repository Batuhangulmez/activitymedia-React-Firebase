import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import casemicelogo from "../../images/casemice.png"

import { LoginContainer } from './LoginContainer'
import {
    PasswordIcon,
    EmailIcon,
    ProfilIcon
} from "../../icons/Icon";



export const SignUp = () => {

    const { register, formState: { errors }, handleSubmit, setValue } = useForm();


    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <LoginContainer>
            <div className="flex flex-col  bg-white rounded-md p-11 shadow-2xl ">
                <div className="flex  bg-black mx-auto justify-center items-center">
                    <img src={casemicelogo} alt="Casemice Logo" className="absolute w-24 h-24 rounded-md bg-white p-2  -mt-11" />
                </div>
                <form className="flex flex-col"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h2 className="text-3xl mb-5">Kayıt Ol</h2>
                    <label className="flex my-2 group">
                        <div className=" mr-2 group-hover:text-primary-base  "><ProfilIcon /></div>
                        <input
                            type="text"
                            placeholder="İsim"
                            name="username"
                            className="  bg-transparent w-full p-1 focus:outline-none border-b-2 border-gray-600  focus:border-primary-base"
                            onChange={(event, { name, value }) => {
                                setValue(name, value);
                            }}
                            {...register("username", {
                                required: true,
                            })}
                        />

                    </label>
                    <label className="flex my-2 group">
                        <div className=" mr-2 group-hover:text-primary-base  "><EmailIcon /></div>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="  bg-transparent w-full p-1 focus:outline-none border-b-2 border-gray-600  focus:border-primary-base"
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
                            placeholder="Password"
                            name="password"
                            className="  bg-transparent w-full p-1 focus:outline-none border-b-2 border-gray-600 focus:border-primary-base "
                            onChange={(event, { name, value }) => {
                                setValue(name, value);
                            }}
                            {...register("password", {
                                required: true,
                                minLength: 3,
                            })}
                        />
                    </label>
                    <div className="flex flex-col items-center text-xs text-primary-base  ">
                        <p>
                            {errors.username && "Adınzı giriniz."}
                        </p>
                        <p>
                            {errors.email && "Geçerli bir email adresi giriniz."}
                        </p>
                        <p>
                            {errors.password && "Geçerli bir şifre girdiniz"}
                        </p>

                    </div>
                    <input className="mt-4 p-2  bg-primary-base hover:bg-primary-dark text-white hover:text-white border rounded-tl-3xl rounded rounded-br-3xl" type="submit" value="Submit" />
                    <div className="mx-auto mt-4 ">Hesabın var mı?    <Link to="/login" className="text-primary-base">Giriş Yap</Link></div>
                </form>

            </div>
        </LoginContainer>
    )
};
export default SignUp;
