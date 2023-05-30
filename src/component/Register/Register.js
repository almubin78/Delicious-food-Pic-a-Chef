import React, { useContext, useState } from 'react';
import './register.css'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { VarContext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const { registerWithEmailAndPass, updateUser } = useContext(VarContext);

    const imgHostKey = process.env.REACT_APP_IMAGE_BB_KEY;
    console.log('imgHostKey',imgHostKey);


    const { data: kala, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allUser');
            const data = await res.json();
            // console.log('kala and loading',kala,isLoading);
            return data;
        }
    });
    const handleSignUp = data => {    
        
        const image = data.myImage[0];
        const formData = new FormData();
        formData.append('image',image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url,{
            method:'POST',
            body: formData
        }).then(res => res.json())
        .then(imgData => {
            console.log('imgData',imgData);
            if (imgData.success) {
                // console.log('imgData.data.url',imgData.data.url);

            }
        })
        /* firebase integration */

        registerWithEmailAndPass(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log('user from firebase', user);
                const userInfo = {
                    displayName: data.name,
                    //photo url deya zay kina
                    photoURL:'https://media.licdn.com/dms/image/D5603AQEOjP3ON2knRg/profile-displayphoto-shrink_800_800/0/1677507598430?e=2147483647&v=beta&t=G-6CChYSPDCnu-Hl5VBqfgSQax6aZaCfkOnQWVm_584'
                }
                updateUser(userInfo)
                    .then(() => {
                        // console.log('userInfo inside updateUser firebase',userInfo);
                        saveUser(data.name, data.email,userInfo.photoURL)

                    })
                    .catch((err) => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message);
            });
    }
    const saveUser = (name, email,img) => {
        const user = { name, email,img };
        // console.log('user from saveUser Functions', user);
        fetch('http://localhost:5000/newUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('this data is from fetch then after post method', data);
                // setCreatedUserEmail(email)
            })
    }

    return (
        <div className='full-form container mx-auto w-75 align-center shadow p-4 m-4'>
            <h2 className='text-center'>Sign Up</h2> <hr />
            <form className='form w-75 mx-auto' onSubmit={handleSubmit(handleSignUp)}>

                <div className="">
                    <label className="label"> <span className="label-text">Name:</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="form-control" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="">
                    <label className="label"> <span className="label-text">Email:</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="form-control" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>

                <div className="">
                    <label className="label mt-2"> <span className="label-text">Password</span></label>
                    <input type="password" {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be 6 characters long" },
                        // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        pattern: { value: /(?=.*[0-9])/, message: 'Password must have at least 1 number' }
                    })} className="form-control" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>

                <div className=" border mt-1 p-2">
                    <label className="label mt-2"> <span className="label-text">Upload Your Image</span></label>
                    <input type="file" {...register('myImage')} className='mt-2 border w-100' />
                    {errors.myImage && <p className='text-red-500'>{errors.myImage}</p>}
                </div>

                <input className='text-white fs-4 btn btn-warning w-50 mt-4 mx-auto' value="Sign Up" type="submit" />
                {signUpError && <p className='text-red-600'>{signUpError}</p>}

            </form>


            <div className=' form text-center w-75 mx-auto'>
                <p className='mt-2'>Already have an account? <br /> <Link className='text-warning text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <hr />
                <label className="label"> <span className="label-text">Register with Google</span></label>
                <button className='text-white fs-4 btn btn-warning mt-4 w-50 mb-3 mx-auto'>GOOGLE </button>
            </div>

        </div>
    )

}
export default Register;