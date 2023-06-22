import React, { useState } from 'react';
import reg from "../assets/register.avif"
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { useAuth } from '../Pages/auth/AuthProvider';
import { useForm } from 'react-hook-form';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';



const Register = () => {
    const { createUser, signInGoogle } = useAuth();
    const { axiosSecure } = useAxiosSecure()
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const handleRegister = (data) => {
        // e.preventDefault();

        setSuccess("");
        setError("");

        const name = data.name;
        const email = data.email;
        const password = data.password;
        const confirmPassword = data.confirmPassword;
        const photo = data.photo;

        if (password !== confirmPassword) {
            setError("Your password did not match")
            return
        }

        if (!/(?=.*?[A-Z])/.test(password)) {
            setError("At last one uppercase ")
            return
        }
        else if (password.length < 6) {
            setError("please add at least 6 number");
            return
        }


        createUser(email, password, confirmPassword)
            .then(result => {
                const currentUser = result.user;

                updateProfile(currentUser, { displayName: name, photoURL: photo })
                reset();
                setSuccess("User has created successfully");

                const user = {
                    name: name,
                    email: email,
                    photo_url: photo
                }

                axiosSecure.put(`/add-user?email=${user?.email}`, user)
                    .then(res => {
                        console.log(res)
                        if (res.data) {

                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Sign Up sucessfull',
                                showConfirmButton: false,
                                timer: 1500
                            })

                        }
                    })
                navigate("/")

                setSuccess("Registration successfull")
                reset()

            })
            .catch(error => {
                // setError(error)
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
        <div className='mt-24 md:px-6'>
            <form onSubmit={handleSubmit(handleRegister)} className=" my-6 ">
                <div className="grid md:grid-cols-2 items-center gap-8 px-3">
                    <div>
                        <img className="w-full md:h-[633px] rounded-md" src={reg} alt="" />
                    </div>
                    <div className="border p-6 rounded-md shadow-md">
                        <h1 className="text-3xl my-4 font-black">Registration!</h1>
                        <label className=' font-semibold'>Full Name</label><br />
                        <input className="w-full p-2 border rounded-md mb-3" type="text" name="name" {...register("name")}
                            placeholder="Enter your name" />
                        <label className=' font-semibold'>Email</label> <br />
                        <input className="w-full p-2 border rounded-md mb-3" type="email" name='email' {...register("email")}
                            placeholder='Enter your email' /> <br />
                        <div className='relative'>
                            <label className='font-semibold'>Password</label><br />
                            <input className="w-full p-2 border rounded-md mb-3" type={showPassword ? "text" : "password"} name="password" {...register("password")}
                                placeholder="Enter your password" />
                            <span className='absolute md:top-10 md:right-8 top-12 right-6'>
                                {
                                    showPassword ? <AiFillEyeInvisible className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <AiFillEye className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                                }
                            </span>
                        </div>
                        <div className='relative'>
                            <label className='font-semibold'>Confirm Password</label><br />
                            <input className="w-full p-2 border rounded-md mb-3" type={showPassword ? "text" : "password"} name="confirmPassword" {...register("confirmPassword")}
                                placeholder="Enter Confirm Password" />
                            <span className='absolute md:top-10 md:right-8 top-12 right-6'>
                                {
                                    showPassword ? <AiFillEyeInvisible className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <AiFillEye className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                                }
                            </span>
                        </div>

                        <label className="font-semibold">Photo URL</label><br />
                        <input className="w-full border p-2 rounded-md" type="text" name="photo" id="" {...register("photo")}
                            placeholder="Enter your photo url" />

                        <p className='text-red-600 text-lg'>{error}</p>
                        <p className='text-green-600 text-lg'>{success}</p>


                        <input className="w-full rounded-md p-3 cursor-pointer  font-semibold bg-[#7bd5f6cf] my-6 text-black" type="submit" value="Register" />

                        <p className="text-center">Already have an new account? <Link to="/login" className='text-blue-600'>Login Now!</Link></p>
                        <span className=" ">
                            <button onClick={handelGoogle} className='flex gap-3 my-4 border border-[#7bd5f6cf] items-center justify-center w-full text-lg rounded-md p-2'>Countinue loging with<span className="text-2xl"><FcGoogle /></span></button>

                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;