import React from 'react';
import './Slider.scss'

function slider(props) {
    return (
        <div className="slider">
            <div className="sliders">
                <input type="radio" name="radio_btn" id="radio1" />
                <input type="radio" name="radio_btn" id="radio2" />
                <input type="radio" name="radio_btn" id="radio3" />
                <input type="radio" name="radio_btn" id="radio4" />

                <div className="slide first">
                    <img src="./image/slider1.png" alt="" />
                </div>
                <div className="slide">
                    <img src="./image/slider2.png" alt="" />
                </div>
                <div className="slide">
                    <img src="./image/slider3.png" alt="" />
                </div>
                <div className="slide">
                    <img src="./image/slider4.png" alt="" />
                </div>


                <div className="navigation_auto">
                    <div className="auto_btn1"></div>
                    <div className="auto_btn2"></div>
                    <div className="auto_btn3"></div>
                    <div className="auto_btn4"></div>

                </div>

            </div>

            <div className="navigation_manual">
                <label for="radio1" className="manual_btn"></label>
                <label for="radio2" className="manual_btn"></label>
                <label for="radio3" className="manual_btn"></label>
                <label for="radio4" className="manual_btn"></label>
            </div>

        </div>
    );
}

export default slider;