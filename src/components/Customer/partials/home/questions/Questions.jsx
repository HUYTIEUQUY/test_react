import React from 'react';
import './Questions.scss'
function Quessions(props) {
    return (
        <div className="frame_question">
            <div className="frame">
                <div className="question">
                    <button type="button" name="button_q" aria-controls="collapse_one">Do You Accept All Major Credit Cards?</button>

                </div>
                <div className="rep" id="collapse_one">
                    <strong>The non-refundable convenience fee for credit cards payments is 6%.</strong>
                    <p>We accept all major credit cards including Visa, MasterCard, American Express (AMEX), and Discover. We utilize
                        Intuit and PayPal for credit card processing.
                        Payment Terms: Full payment is due at the time of service rendered. In the event payment is declined, client
                        will reimburse Treadmill Installers for any fees incurred. If payment is not forthcoming for an additional 10
                        days, Treadmill Installers may elect to seek redress in court, or may turn the matter over to a collection
                        agency, at its sole discretion.</p>
                </div>
            </div>
            <div className="frame">
                <div className="question">
                    <button aria-controls="collapse_two" >Do You Accept All Major Credit Cards?</button>
                </div>
                <div className="rep" id="collapse_two">
                    <strong>The non-refundable convenience fee for credit cards payments is 6%.</strong>
                    <p>We accept all major credit cards including Visa, MasterCard, American Express (AMEX), and Discover. We utilize
                        Intuit and PayPal for credit card processing.
                        Payment Terms: Full payment is due at the time of service rendered. In the event payment is declined, client
                        will reimburse Treadmill Installers for any fees incurred. If payment is not forthcoming for an additional 10
                        days, Treadmill Installers may elect to seek redress in court, or may turn the matter over to a collection
                        agency, at its sole discretion.</p>
                </div>
            </div>
            <div className="frame">
                <div className="question">
                    <button aria-controls="collapse_three">Do You Accept All Major Credit Cards?</button>
                </div>
                <div className="rep" id="collapse_three">
                    <strong>The non-refundable convenience fee for credit cards payments is 6%.</strong>
                    <p>We accept all major credit cards including Visa, MasterCard, American Express (AMEX), and Discover. We utilize
                        Intuit and PayPal for credit card processing.
                        Payment Terms: Full payment is due at the time of service rendered. In the event payment is declined, client
                        will reimburse Treadmill Installers for any fees incurred. If payment is not forthcoming for an additional 10
                        days, Treadmill Installers may elect to seek redress in court, or may turn the matter over to a collection
                        agency, at its sole discretion.</p>
                </div>
            </div>


        </div>
    );
}

export default Quessions;