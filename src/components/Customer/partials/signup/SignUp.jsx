import React from 'react';
import './SignUp.scss'

function SignUp(props) {
    return (

        <div class="sign_in_page">
            <div class="efect">
                <div class="box">
                    <span style="--i:1;"><img src="../image/ca1.png" alt=""/></span>
                    <span style="--i:2;"><img src="../image/ca2.png" alt=""/></span>
                    <span style="--i:3;"><img src="../image/ca3.png" alt=""/></span>
                    <span style="--i:4;"><img src="../image/ca4.png" alt=""/></span>
                    <span style="--i:5;"><img src="../image/ca1.png" alt=""/></span>
                    <span style="--i:6;"><img src="../image/ca2.png" alt=""/></span>
                    <span style="--i:7;"><img src="../image/ca3.png" alt=""/></span>
                    <span style="--i:8;"><img src="../image/ca4.png" alt=""/></span>
                </div>
            </div>


            <div class="sign_in_form">

                <div class="title_sign_in">
                    <h1>Sign up</h1>
                </div>
                <form action="add" method="post">
                    <div class="content_sign_in">
                        <div><input class="input_sign_in" name="email" type="text" placeholder="Email" /></div>
                        <div><input class="input_sign_in" type="password" name="password" placeholder="Password" /></div>
                        <div><input class="input_sign_in" type="password" placeholder="Enter the password" /></div>
                        <div><input class="input_sign_in" type="submit" value="Sign up" /></div>
                        <div><a href="#">Forgot password?</a></div>
                        <div><p>User account has existed. <a href="login">  Sign in</a></p>
                        </div>
                    </div>
                </form>

            </div>

        </div>


    );
}

export default SignUp;