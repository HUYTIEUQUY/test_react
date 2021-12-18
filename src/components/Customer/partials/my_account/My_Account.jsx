import React from 'react';
import './My_Account.scss'

function My_Account(props) {
    return (
        <div className="frame">
            <div className="title_frame">
                <p> My Account </p>
            </div>
            <div className="content_frame">

                <div className="info2">
                    <div className="row2">
                        <image src="/image/sv1.jpg" className="img" alt="" />
                    </div>
                    <div className="file">
                        <label for="photo_account"><i className="fas fa-camera"></i> Choose photo</label>
                        <input type="file" value="Choose photo" id="photo_account" />
                    </div>
                    <div className="row">
                        <div className="col15">
                            <p>Email</p>
                        </div>
                        <div className="col60">
                            <input type="text" name="email" value="{{auth.email}}" />
                        </div>
                    </div>
                    <form>
                        <div className="row">
                            <div className="col15">
                                <p>Phone </p>
                            </div>
                            <div className="col60">
                                <input type="number" name="phone" value="{{auth.phone}}" />
                            </div>
                            <div className="col15"><input type="submit" value="Update"></input></div>
                        </div>
                    </form >

                    <div className="row">
                        <div className="link">
                            <image src="/image/iconzalo.png" className="img_social" alt=""></image>
                            <image src="/image/iconfacbook.png" className="img_social" alt=""></image>
                            <image src="/image/icongg.png" className="img_social" alt=""></image>
                        </div>
                    </div>





                    <form action="/auth/account-update" method="post" id="form2">
                        <div className="info1">
                            <div className="row">
                                <b>Personal information</b>
                            </div>

                            <div className="row">
                                <div className="col25">
                                    <p>Last name</p>
                                </div>
                                <div className="col75">
                                    <input type="text" name="last_name" value="{{auth.lastname}}" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col25">
                                    <p>First name</p>
                                </div>
                                <div className="col75">
                                    <input type="text" name="first_name" value="{{auth.firstname}}" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col25">
                                    <p>Nick name</p>
                                </div>
                                <div className="col75">
                                    <input type="text" name="nick_name" value="{{ auth.nickname }}" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col25">
                                    <p>Day of birth</p>
                                </div>
                                <div className="col75">
                                    <input type="text" name="birthday" value="{{auth.birth}} " readonly className="picker" />

                                </div>
                            </div>

                            <div className="row">
                                <div className="col25">
                                    <p>Sex</p>
                                </div>
                                <div className="col75 radio">
                                    <input type="radio" name="sex" value="1" checked />
                                    <p for="1"> Male</p>
                                    <input type="radio" name="sex" value="2" />
                                    <p for="2">Female</p>
                                    <input type="radio" name="sex" value="3" />
                                    <p for="3">Order</p>
                                </div>
                            </div>
                            <div className="row">

                            </div>
                            <div className="row btn">
                                <input type="submit" value="Save changes" />
                            </div>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
}

export default My_Account;