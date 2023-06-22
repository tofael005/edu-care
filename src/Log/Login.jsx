import React, { useState } from 'react';
import login from '../assets/login.avif'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { useAuth } from '../Pages/auth/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn, signInGoogle } = useAuth();
    const { axiosSecure } = useAxiosSecure()
    const navigate = useNavigate();
    const location = useLocation();
    console.log("login page", location)
    const from = location?.state?.from?.pathname || "/"

    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }
    const handelGoogle = () => {
        signInGoogle()
            .then((result) => {
                const user = {
                    name: result?.user?.displayName,
                    email: result?.user?.email,
                    photo_url: result?.user?.photoURL
                }


                axiosSecure.put(`/add-user?email=${user?.email}`, user)
                    .then(res => {
                        if (res.data) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Login sucessfull',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                navigate(from)
            })
            .catch((error) => {
            })
    }


    return (
        <div className="max-w-[1240px] mx-auto">
            <form onSubmit={handleLogin} className=" my-10 mt-24 ">
                <div className="grid md:grid-cols-2 items-center gap-6 px-3 ">
                    <div>
                        <img className="w-full md:h-[545px] rounded-md" src={login} alt="" />
                    </div>
                    <div className="border p-6 rounded-md shadow-md">
                        <h1 className="text-3xl my-8 font-black">Log In</h1>
                        <label className=' text-xl font-semibold'>Email</label> <br />
                        <input className="w-full p-3 border rounded-md mb-3" type="email" name='email' placeholder='Enter your email' /> <br />
                        <div className='relative'>
                            <label className=' text-xl font-semibold'>Password</label><br />
                            <input className="w-full p-3 border rounded-md mb-3" type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" />
                            <span className='absolute md:top-12 md:right-8 top-12 right-6'>
                                {
                                    showPassword ? <AiFillEyeInvisible className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <AiFillEye className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                                }
                            </span>
                        </div>
                        <p className="text-center">Forger password</p>

                        <span>{error}</span>
                        <button className="w-full rounded-md font-semibold p-3 bg-[#7bd5f6cf] my-4">Log In</button>
                        <p className="text-center">Create an new account <Link to="/register" className='text-blue-600'>Register Now!</Link></p>
                        <span className=" ">
                            <button onClick={handelGoogle} className='flex gap-3 my-4 border border-[#7bd5f6cf] items-center justify-center w-full text-lg rounded-md p-3'>Countinue loging with <span className="text-2xl"><FcGoogle /></span></button>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;