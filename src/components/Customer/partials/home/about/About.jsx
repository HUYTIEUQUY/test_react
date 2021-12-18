import React from 'react';
import './About.scss'
function About(props) {
    return (
        <div className="container">
            <section className="section">
                <div className="title">
                    <h1>Fish shop</h1>
                    <p>Nature friendly enjoy beauty</p>
                </div>

                <div className="about_img">

                    <div className="img">
                        <img src="./image/logo.png" alt=""/>
                    </div>

                    <div className="btn_info_about">
                        <div className="btn_about">
                            <button className="tab-btn active" data-id="history">history</button>
                            <button className="tab-btn" data-id="vision">vision</button>
                            <button className="tab-btn" data-id="goals">goals</button>
                        </div>
                        <div className="about_content">
                            <div className="content active" id="history">
                                <h4>History</h4>
                                <p>
                                    I'm baby wolf pickled schlitz try-hard normcore marfa man bun
                                    mumblecore vice pop-up XOXO lomo kombucha glossier bicycle
                                    rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard
                                    tilde try-hard, woke fixie banjo man bun. Small batch tumeric
                                    mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral
                                    direct trade hoodie ugh chambray, craft beer pork belly flannel
                                    tacos single-origin coffee art party migas plaid pop-up.
                                    tacos single-origin coffee art party migas plaid pop-up.
                                    tacos single-origin coffee art party migas plaid pop-up.
                                </p>
                            </div>
                            {/* <!-- end of single item -->
                            <!-- single item --> */}
                            <div className="content" id="vision">
                                <h4>Vision</h4>
                                <p>
                                    Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth
                                    crucifix offal deep v hella biodiesel. Church-key listicle
                                    polaroid put a bird on it chillwave palo santo enamel pin,
                                    tattooed meggings franzen la croix cray. Retro yr aesthetic four
                                    loko tbh helvetica air plant, neutra palo santo tofu mumblecore.
                                    Hoodie bushwick pour-over jean shorts chartreuse shabby chic.
                                    Roof party hammock master cleanse pop-up truffaut, bicycle
                                    rights skateboard affogato readymade sustainable deep v
                                    live-edge schlitz narwhal.
                                </p>
                            </div>
                            {/* <!-- end of single item --> */}
                            {/* <!-- single item --> */}
                            <div className="content" id="goals">
                                <h4>Goals</h4>
                                <p>
                                    Chambray authentic truffaut, kickstarter brunch taxidermy vape
                                    heirloom four dollar toast raclette shoreditch church-key.
                                    Poutine etsy tote bag, cred fingerstache leggings cornhole
                                    everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk
                                    swag, mixtape hashtag marfa readymade direct trade man braid
                                    cold-pressed roof party. Small batch adaptogen coloring book
                                    heirloom. Letterpress food truck hammock literally hell of wolf
                                    beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie,
                                    banh mi salvia venmo photo booth quinoa chicharrones.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
}

export default About;