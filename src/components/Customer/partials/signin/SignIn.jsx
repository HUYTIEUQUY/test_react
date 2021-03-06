import React from 'react';

function SignIn(props) {
    return (

        <div class="sign_in_page">
            <div class="efect">
                <div class="box">
                    <span style="--i:1;"><img src="../image/sign_in1.png" alt=""/></span>
                    <span style="--i:2;"><img src="../image/sign_in2.png" alt=""/></span>
                    <span style="--i:3;"><img src="../image/sign_in3.png" alt=""/></span>
                    <span style="--i:4;"><img src="../image/logo2.png" alt=""/></span>
                    <span style="--i:5;"><img src="../image/sign_in1.png" alt=""/></span>
                    <span style="--i:6;"><img src="../image/sign_in2.png" alt=""/></span>
                    <span style="--i:7;"><img src="../image/sign_in3.png" alt=""/></span>
                    <span style="--i:8;"><img src="../image/logo2.png" alt=""/></span>
                </div>
            </div>


            <div class="sign_in_form">

                <div class="title_sign_in">
                    <h1>Sign in</h1>
                </div>
                <form action="/auth/check-user" method="post">
                    <div class="content_sign_in">
                        <div><input class="input_sign_in" type="text" placeholder="Email" name="email" id="email"/></div>
                        <div><input class="input_sign_in" type="password" placeholder="Password" name="password" id="password"/></div>
                        <div><input class="input_sign_in" type="submit" value="Sign in"/></div>
                        <div><a href="#">Forgot password?</a></div>
                        <div><p>Create a new account ?<a href="signup">  Sign up</a></p>
                        </div>

                    </div>
                </form>

            </div>

        </div>


    );
}

export default SignIn;