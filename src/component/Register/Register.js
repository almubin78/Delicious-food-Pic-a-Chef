import React, { useState } from 'react';
import './register.css'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const handleSignUp = data => {
        console.log(data);
    }
    return (
        <div className='full-form container mx-auto w-75 align-center shadow p-4 m-4'>
            <h2 className=''>Sign Up</h2>
            <form className='form' onSubmit={handleSubmit(handleSignUp)}>

                <div className="">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="form-control" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="form-control" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>

                <div className="">
                    <label className="label"> <span className="label-text">Password (minimum one uppercase and a number)</span></label>
                    <input type="password" {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be 6 characters long" },
                        // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        pattern: { value: /(?=.*[0-9])/, message: 'Password must have one uppercase and a number' }
                    })} className="form-control" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>

                <div className="">
                    <label className="label"> <span className="label-text">Upload Your Image</span></label>
                    <input type="file" {...register('myImage')} />
                    {errors.myImage && <p className='text-red-500'>{errors.myImage}</p>}
                </div>

                <input className='btn btn-warning w-50 mt-4 mx-auto' value="Sign Up" type="submit" />
                {signUpError && <p className='text-red-600'>{signUpError}</p>}

            </form>

            <p>Already have an account <Link className='text-warning text-secondary' to="/login">Please Login</Link></p>
            <div className="divider">OR</div>

            <div className=' form'>
            <label className="label"> <span className="label-text">Register with Google</span></label>
                <button className='btn btn-warning w-50 mt-4 mb-3 mx-auto'>GOOGLE </button>
            </div>

        </div>
    )
};

export default Register;