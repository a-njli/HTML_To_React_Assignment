import React from 'react';

function ContactUs() {
    return (
        <section className="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12 mt-2 mb-2">
                    <img src="images/contactus.jpeg" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6 col-md-6 col-12  mt-2 mb-2">
                    <h3 className="abtus">Keep In Touch</h3>
                    <p className="mt-5">
                        <b>Email Address</b> <br/> <span><a href="info@simplyenglish.ai">info@simplyenglish.ai</a></span>
                    </p>
                    <p className="mt-2"/>
                        <b>Phone Number</b> <br/> India : 9599060043<br/>
                   
                    <div>
                        <a href="#"><img src="images/gogleplay.png" alt="qr-img" width=""
                                className="img-fluid rounded-lg"/></a>
                        <img src="images/qr.png" alt="qr-img" width="100px" className="img-fluid ml-3"/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}

export default ContactUs;
