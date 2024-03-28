import React from 'react';
import '../Styles/ContactPage.scss';

function ContactPage() {
    return (
        
        <div id='contact' className="contact-page">
 
                    <p className='cen'>Contact Me</p>
            <div className="form-container">

                <p className='pp'>Let's work <span className='spann'>together</span></p>
                <form>
                    <div className="form-group">

                        <input placeholder='Name' type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">

                        <input placeholder='Email' type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">

                        <input placeholder='Subject' type="text" id="subject" name="subject" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder='Message' id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;
