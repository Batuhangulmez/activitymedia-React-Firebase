import React from 'react'
import casemicelogo from "../../images/casemice.png"
import { LoginContainer } from './LoginContainer'
import {
    PasswordIcon,
    EmailIcon,
    ProfilIcon
} from "../../icons/Icon";




export const Login = () => {
    return (
        <LoginContainer>
            <div className="flex flex-col  bg-white rounded-md p-11 shadow-2xl ">
                <div className="flex  bg-black mx-auto justify-center items-center">
                    <img src={casemicelogo} alt="Casemice Logo" className="absolute w-24 h-24 rounded-md bg-white p-2  -mt-11" />
                </div>

                <form className="flex flex-col">
                    <h2 className="text-3xl mb-5">Giriş Yap</h2>
                    <label className="flex my-2 group">
                        <div className=" mr-2 group-hover:text-primary-base  "><EmailIcon /></div>
                        <input type="email" placeholder="Email" name="email" className="  bg-transparent w-full p-1 focus:outline-none border-b-2 border-gray-600  focus:border-primary-base " />
                    </label>
                    <label className="flex my-2 group">
                        <div className="mr-2 group-hover:text-primary-base"><PasswordIcon /></div>
                        <input type="password" placeholder="Password" name="password" className="  bg-transparent w-full p-1 focus:outline-none border-b-2 border-gray-600 focus:border-primary-base" />
                    </label>
                    <input className="mt-4 p-2  bg-primary-base hover:bg-primary-dark text-white hover:text-white border rounded-tl-3xl rounded-md rounded-br-3xl" type="submit" value="Submit" />
                    <div className="mx-auto mt-4 ">Yeni misin?    <a href="/signup" className="text-primary-base">Hesap Oluştur</a></div>
                </form>

            </div>
        </LoginContainer>


    )
}
