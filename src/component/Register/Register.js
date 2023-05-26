import React, { useState } from 'react';
import './register.css'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [signUpError,setSignUpError] = useState('');
    const handleSignUp = data =>{
        console.log(data);
    }
    return (
        <div className='full-form'>
                <h2 className=''>Sign Up</h2>
                <form className='form' onSubmit={handleSubmit(handleSignUp)}>

                    <div className="">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="">
                        <label className="label"> <span className="label-text">Password (minimum one uppercase and a number)</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            pattern: { value: /(?=.*[0-9])/, message: 'Password must have one uppercase and a number' }
                        })} className="" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className="">
                        <label className="label"> <span className="label-text">Choose Your Subject</span></label>
                        <select {...register('subject')} className="">
                            <option value="Physics">Physics</option>
                            <option value="ICT">ICT</option>
                        </select>
                        {errors.subject && <p className='text-red-500'>{errors.subject}</p>}
                    </div>
                    <div className="">
                        <label className="label"> <span className="label-text">Upload Your Image</span></label>
                        <input type="file" {...register('myImage')} />
                        {errors.myImage && <p className='text-red-500'>{errors.myImage}</p>}
                    </div>
                    
                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}

                </form>

                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>

                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
)};

export default Register;