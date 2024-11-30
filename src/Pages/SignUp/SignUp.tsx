import React from 'react'
import './SignUp.css'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'

const SignUp: React.FunctionComponent = () => {
  return (
    <div className='sign-up-page'>
        <div className="sign-in-page">
            <div className="sign-up-block">
                <div className="sign-up-title">Register</div>
                <div className="sign-up-form-block">
                    <form>
                        <div className="input-block">
                            <span>Enter Username</span>
                            <input type="text" placeholder="Usernickname" />
                        </div>  

                        <div className="input-block">
                            <span>Enter Mail</span>
                            <input type="text" placeholder="example@gmail.com" />
                        </div>

                        <div className="input-block">
                            <span>Enter Phone</span>
                            <input type="text" placeholder="+987 654 321 000" />
                        </div>  

                        <div className="input-block">
                            <span>Enter Password</span>
                            <input type="password" placeholder="********" />
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