import React from 'react';
import './Sale.scss'

function Sale(props) {
    return (
        <div className="sale">
            <div className="sale_section">
                {/* {{!-- img --}} */}
                <div className="sale_img">
                    <img src="./image/cavang.png" alt="sale" />
                </div>
                {/* {{!-- info --}} */}
                <div className="sale_info">
                    <h2>Supper sale</h2>
                    <h4>
                        Super sale on Sunday, 30 November 2021, 23:59PM
                    </h4>
                    <p id="paragraph">
                        #Gold fish are 50% promotion until the end of November
                    </p>
                    <p id="paragraph">
                        #Free shipping across Vietnam
                    </p>

                    <div className="deadline_sale">
                        <div className="deadline-format">
                            <div>
                                <h5 className="days giveaway">07</h5>
                                <span>days</span>
                            </div>
                        </div>


                        <div className="deadline-format">
                            <div>
                                <h5 className="hours giveaway">20</h5>
                                <span>hours</span>
                            </div>
                        </div>


                        <div className="deadline-format">
                            <div>
                                <h5 className="minutes giveaway">20</h5>
                                <span>mins</span>
                            </div>
                        </div>


                        <div className="deadline-format">
                            <div>
                                <h5 className="seconds giveaway">20</h5>
                                <span>secs</span>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
}

export default Sale;