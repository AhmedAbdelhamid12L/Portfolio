import React, { useState } from 'react'
import style from './Contact.module.css'
import emailjs from 'emailjs-com';

export default function Contact() {
  const [result, setResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6ns062d', 'template_seya89c', e.target , 'user_h0EXNAVv7fXmwloXtEMqv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      setResult(true);
  };
  setTimeout(()=>{
    setResult(false);
  } , 5000)
  return (
    <div>
      <div id="contact" className="container p-5">
        <div>
          <h2 className={style.contactH2}>CONTACT ME</h2>
          <div className="d-flex align-items-center justify-content-center">
            <div className={style.line}></div>
            <i className="fas fa-star fa-3x px-2"></i>
            <div className={style.line}></div>
          </div>
        </div>
        <div className='container pt-5'>
          <div className='row'>
            <div className='col-md-5 pt-5 mt-5'>
              <p className='h3'><i className='fas fa-map-marker-alt pe-3'></i> Address </p>
              <p className='fs-4 pb-4'> Ismailia, Egypt </p>
              <p className='h3'><i className='fas fa-phone-alt pe-3'></i> Tel. </p>
              <p className='fs-4 pb-4'> (+2) 01151667739  </p>
              <p className='h3'><i className='fas fa-envelope pe-3'></i> E-mail </p>
              <p className='fs-4 pb-4'> ahmedabdelhamid121296@gmail.com </p>
            </div>
            <div className='col-md-7'>
              <form onSubmit={sendEmail}>
                <input type="text" 
                className="form-control mb-2 py-4 border-0 border-bottom border-2 m-auto fs-4" 
                placeholder="Name"
                required
                name='fullname'/>
                <input type="email" 
                className="form-control mb-2 py-4 border-0 border-bottom border-2 m-auto fs-4" 
                placeholder="Email Address"
                required
                name='email' />
                <input type="number" 
                className="form-control mb-2 py-4 border-0 border-bottom border-2 m-auto fs-4" 
                placeholder="Phone Number"
                required
                name='phone' />
                <textarea name="message" 
                className="form-control mb-2 py-4 border-0 border-bottom border-2 m-auto fs-4" 
                placeholder="Message" 
                cols="30" 
                rows="5"
                required
                name='message'></textarea>
                {result? <p className="h5 pt-4 text-success" >
                Your message has been succeessfully sent. 
                i will contact you soon.</p>:""}
                <button type='submit' className="btn btn-success py-3 px-5 d-block m-auto">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
