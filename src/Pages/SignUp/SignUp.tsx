import React from 'react'
import './SignUp.css'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { SubmitHandler, useForm } from 'react-hook-form'

const SignUp: React.FunctionComponent = () => {
    
    interface ISignUpForm {
        name: string
        email: string
        phone: string
        password: string
    }

    const {register, handleSubmit, formState: {errors}, reset} = useForm<ISignUpForm>({
        mode: 'onSubmit'
    })  

    const regSubmit: SubmitHandler<ISignUpForm> = data => {
        console.log(data);
        reset();
    }


    return (
        <div className='sign-up-page'>
            <div className="sign-in-page">
                <div className="sign-up-block">
                    <div className="sign-up-title">Register</div>
                    <div className="sign-up-form-block">
                        <form onSubmit={handleSubmit(regSubmit)}>
                            <div className="input-block">
                                <span>Enter Username</span>
                                <input
                                    type="text" placeholder="Usernickname"
                                    {...register('name', {required: "This Field Is Required"})}
                                />
                                {errors.name && <p className='error'>{errors.name.message}</p>}
                            </div>  

                            <div className="input-block">
                                <span>Enter Mail</span>
                                <input
                                    type="text"
                                    placeholder="example@gmail.com"
                                    {...register('email', {
                                        required: "This Field Is Required",
                                        pattern: {
                                           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                           message: "Invalid email format",
                                        }
                                    })}
                                />
                                {errors.email && <p className='error'>{errors.email.message}</p>}
                            </div>

                            <div className="input-block">
                                <span>Enter Phone</span>
                                <input
                                    type="text"
                                    placeholder="+987 654 321 000"
                                    {...register('phone', {
                                            required: "This Field Is Required",
                                            pattern: {
                                                value: /^\+[0-9]{1,15}$/,
                                                message: "Invalid Phone format"
                                            }
                                    })}
                                />
                                {errors.phone && <p className='error'>{errors.phone.message}</p>}
                            </div>  

                            <div className="input-block">
                                <span>Enter Password</span>
                                <input
                                    type="password"
                                    placeholder="********"
                                    {...register('password', {
                                        required: "This Field Is Required",
                                    })}
                                />
                                {errors.password && <p className='error'>{errors.password.message}</p>}
                            </div>
                            <div className="btns-block">
                                <div className="remember-btn">
                                    <input type="checkbox" /> l Accept The Privacy Policy
                                </div>
                            </div>
                            <div className="sing-up-btn">
                                <button type="submit">Register</button>
                            </div>
                            <div className="separate-line">OR</div>
                            <div className="social-btns-block">
                                <div className="facebook-btn">
                                    <button><span><FaFacebookF /></span> Continue Facebook</button>
                                </div>
                                <div className="google-btn">
                                    <button><span><FaGoogle /></span> Continue Google</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp