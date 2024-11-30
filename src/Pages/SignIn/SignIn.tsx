import React from "react";
import "./SignIn.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

const SignIn: React.FunctionComponent = () => {
    interface ILoginForm {
        email: string
        password: string
    }

    const { register, handleSubmit, formState: {errors} } = useForm<ILoginForm>({
        defaultValues: {}
    })

    const submit: SubmitHandler<ILoginForm> = data => {
        console.log(data)
    }

    const error: SubmitErrorHandler<ILoginForm> = data => {
        console.log(data)
    }

    return (
        <div className="sign-in-page">
            <div className="sign-in-block">
                <div className="sign-in-title">Sing In</div>
                <div className="sign-in-form-block">
                    <form onSubmit={handleSubmit(submit, error)}>
                        <div className="input-block">
                            <span>Enter Mail</span>
                            <input
                                type="text" 
                                placeholder="example@gmail.com" 
                                {
                                    ...register('email',
                                        {
                                            required: "This Field Is Required",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Invalid email format",
                                            }
                                        })
                                }
                            />
                            {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                        </div>
                        <div className="input-block">
                            <span>Enter Password</span>
                            <input
                                type="password"
                                placeholder="********"
                                {
                                    ...register('password',
                                    {required: "This Field Is Required"})
                                } />
                            {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
                        </div>
                        <div className="btns-block">
                            <div className="remember-btn">
                                <input type="checkbox" /> Remember Me
                            </div>
                            <div className="forget-pass-btn">
                                <a href="#">Forget Password</a>
                            </div>
                        </div>
                        <div className="sing-in-btn">
                            <button type="submit">Sign In</button>
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
    );
};

export default SignIn;
