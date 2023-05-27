import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [signInError,setSignInError] = useState('');

    const handleLogin = data =>{

    }
    return (
        <div className='full-form container mx-auto w-75 align-center shadow p-4 m-4'>
            <h2 className='text-center'>Log In</h2> <hr />
            <form className='form w-75 mx-auto' onSubmit={handleSubmit(handleLogin)}>

                <div className="">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="form-control" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>

                <div className="">
                    <label className="label"> <span className="label-text">Password </span></label>
                    <input type="password" {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be 6 characters long" },
                        // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        pattern: { value: /(?=.*[0-9])/, message: 'Password must have one uppercase and a number' }
                    })} className="form-control" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>

                
                <input className='text-white fs-4 btn btn-warning w-50 mt-4 mx-auto' value="Log In" type="submit" />
                {signInError && <p className='text-red-600'>{signInError}</p>}

            </form>


            <div className=' form text-center w-75 mx-auto'>
                <p className='mt-2'>Have not account yet? <br /> <Link className='text-warning text-secondary' to="/register">Please Register</Link></p>
                <div className="divider">OR</div>
                    <hr />
                <label className="label"> <span className="label-text">Sign in with Google</span></label>
                <button className='text-white fs-4 btn btn-warning mt-4 w-50 mb-3 mx-auto'>GOOGLE </button>
            </div>

        </div>
    );
};

export default Login;