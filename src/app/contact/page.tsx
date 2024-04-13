import React from 'react'

function Contact() {
  return (
    <div className='max-w-2xl mx-auto'>
      <div className="title-section">
        <h2 >Contact Us</h2>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sint sed eius earum qui ut iure numquam cum aliquid! Quidem aliquam porro adipisci ab aliquid, facere est ad earum ea.</p>
      </div>

      <form id="contact-form" className="my-6 flex flex-col space-y-6 max-w-xl mx-auto">
        <div>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" placeholder="name@company.com" required />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="Let us know how we can help you" required />
        </div>
        <div>
          <label htmlFor="message">Your message</label>
          <textarea id="message" rows={4} placeholder="Your message..."></textarea>
        </div>
        <button type="submit" className="btn-normal w-full">Send message</button>
      </form>
    </div>
  )
}

export default Contact