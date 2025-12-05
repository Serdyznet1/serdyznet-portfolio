// src/components/Contact/Contact.js
import React, { useState } from 'react';
import { 
  ContactSectionWrapper, ContactInfo, InfoItem, 
  ContactForm, FormInput, FormTextarea, FormButton,
  SuccessOverlay, SuccessCard
} from './Contact.styles';
import { Section, SectionTitle, SectionSubtitle } from '../../styles/common';
import * as Icons from '../../utils/icons'; 

const Contact = () => {
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // FIX: Using the Environment Variable here
    // React will automatically swap this with the key from your .env file
    const response = await fetch(`https://formspree.io/f/${process.env.REACT_APP_FORMSPREE_ID}`, {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset(); 
      setShowModal(true); // Show the Custom Green Modal
    } else {
      setStatus("ERROR");
      alert("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <>
      <Section id="contact">
        <SectionTitle>Contact Me</SectionTitle>
        <SectionSubtitle>Get in touch with me</SectionSubtitle>

        <ContactSectionWrapper>
          
          {/* --- LEFT SIDE: INFO --- */}
          <ContactInfo>
            <h3>Let's Talk</h3>
            <p>
              I'm currently available to take on new projects. 
              Get in touch and let's build something awesome together!
            </p>

            <InfoItem href="mailto:serdyznet1@gmail.com">
              <div><Icons.ContactIcon /></div>
              <span>
                <strong>Email</strong>
                <small>serdyznet1@gmail.com</small>
              </span>
            </InfoItem>

            <InfoItem href="tel:+2348140429566">
              <div><Icons.PhoneIcon /></div>
              <span>
                <strong>Phone</strong>
                <small>+234 814 042 9566</small>
              </span>
            </InfoItem>

            <InfoItem href="https://wa.me/234806543210" target="_blank">
              <div><Icons.WhatsAppIcon /></div>
              <span>
                <strong>WhatsApp</strong>
                <small>+234 806 543 210</small>
              </span>
            </InfoItem>

            <InfoItem as="div">
              <div><Icons.HomeIcon /></div>
              <span>
                <strong>Location</strong>
                <small>Jos, Plateau State, Nigeria</small>
              </span>
            </InfoItem>
          </ContactInfo>

          {/* --- RIGHT SIDE: FORM --- */}
          <ContactForm onSubmit={handleSubmit}>
            <FormInput 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
            />
            <FormInput 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
            />
            <FormTextarea 
              name="message" 
              placeholder="Write your message here..." 
              required 
            />
            
            <FormButton type="submit" disabled={status === "SUCCESS"}>
              {status === "SUCCESS" ? "Sent!" : "Send Message"} 
              <Icons.SendIcon />
            </FormButton>
          </ContactForm>

        </ContactSectionWrapper>
      </Section>

      {/* --- SUCCESS MODAL --- */}
      {showModal && (
        <>
          <SuccessOverlay onClick={() => setShowModal(false)} />
          <SuccessCard>
            <div><Icons.CheckCircleIcon /></div>
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out. I'll get back to you shortly.</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </SuccessCard>
        </>
      )}
    </>
  );
};

export default Contact;