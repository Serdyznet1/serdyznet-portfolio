// src/components/Support/Support.js
import React, { useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { 
  FullPageContainer, InnerWrapper, CloseButton,
  Header, ContentGrid, DonationCard, AmountGrid, 
  AmountBox, InputGroup, PayButton, InfoColumn, InfoHeader, 
  FeatureList, FeatureItem, QuoteCard, 
  ReviewsSection, ReviewsGrid, ReviewCard, WhatsAppFloat // <-- Imports
} from './Support.styles';
import * as Icons from '../../utils/icons';

const Support = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState(3000); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const config = {
    reference: (new Date()).getTime().toString(),
    email: email || "anonymous@donor.com",
    amount: amount * 100,
    publicKey: process.env.REACT_APP_PAYSTACK_KEY, 
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = () => {
    alert("Thanks for your support!");
    onClose();
  };

  const handlePayment = (e) => {
    e.preventDefault();
    initializePayment(onSuccess);
  };

  const priceOptions = [
    { value: 3000, label: 'Small Coffee', icon: '☕' },
    { value: 5000, label: 'Regular Coffee', icon: '☕☕' },
    { value: 10000, label: 'Double Coffee', icon: '☕☕☕' },
    { value: 20000, label: 'Project Support', icon: '💎' },
    { value: 50000, label: 'Server Costs', icon: '🔥' },
    { value: 100000, label: 'Gold Sponsor', icon: '👑' },
  ];

  if (!isOpen) return null;

  return (
    <FullPageContainer>
      <InnerWrapper>
        {/* Close Button */}
        <CloseButton onClick={onClose}><Icons.CloseIcon /></CloseButton>

        <Header>
          <div className="icon-box"><Icons.HeartIcon /></div>
          <h2>Support My Work</h2>
          <p>Your support, no matter how small, fuels my passion to create high-quality open-source projects, tutorials, and templates.</p>
        </Header>

        <ContentGrid>
          {/* Left Side */}
          <DonationCard>
            <h3><Icons.ModernCoffeeCupWithHandleAndCleanSteam /> Buy Me a Coffee</h3>
            <AmountGrid>
              {priceOptions.map((option) => (
                <AmountBox 
                  key={option.value} 
                  $active={amount === option.value} 
                  onClick={() => setAmount(option.value)}
                >
                  <span>{option.icon}</span>
                  <strong>₦{option.value.toLocaleString()}</strong>
                </AmountBox>
              ))}
            </AmountGrid>
            <form onSubmit={handlePayment}>
              <InputGroup>
                <label>Custom Amount (₦)</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} min="100" />
              </InputGroup>
              <InputGroup>
                <label>Name (Optional)</label>
                <input type="text" placeholder=" Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
              </InputGroup>
              <InputGroup>
                <label>Message (Optional)</label>
                <textarea placeholder="Say something nice..." value={message} onChange={(e) => setMessage(e.target.value)} />
              </InputGroup>
              <PayButton type="submit">Support with ₦{amount.toLocaleString()}</PayButton>
            </form>
          </DonationCard>

          {/* Right Side */}
          <InfoColumn>
            <InfoHeader>
              <h3>Why Your Support Matters</h3>
              <p>Behind every line of code, every design decision, and every mentorship session is countless hours of specialized work. Your support helps me:</p>
            </InfoHeader>
            <FeatureList>
              <FeatureItem>
                <div className="icon pink"><Icons.CodeIcon /></div>
                <div><h4>Create Free Resources</h4><p>Develop templates that help developers worldwide.</p></div>
              </FeatureItem>
              <FeatureItem>
                <div className="icon purple"><Icons.FlashIcon /></div>
                <div><h4>Improve Quality</h4><p>Invest in better tools and resources.</p></div>
              </FeatureItem>
              <FeatureItem>
                <div className="icon orange"><Icons.BulbIcon /></div>
                <div><h4>Explore New Ideas</h4><p>Experiment with innovative concepts.</p></div>
              </FeatureItem>
            </FeatureList>
            <QuoteCard>
              <div className="profile"><img src="/profile-pic.jpg" alt="Profile" /></div>
              <p>"Every contribution is a vote of confidence in my work."</p>
              <span>— Isah Sadis Suleiman</span>
            </QuoteCard>
          </InfoColumn>
        </ContentGrid>

        {/* --- REVIEWS SECTION ADDED BACK --- */}
        <ReviewsSection>
          <h3>From Supporters</h3>
          <ReviewsGrid>
            <ReviewCard>
              <p>"As a developer bridging into Forex and trading, SerdyzNet's structured mentorship and educational resources were the single most effective tool for career transition. He doesn't just teach code; he teaches market strategy."</p>
              <div><strong>ADAM ISAH </strong><small>Frontend Developer</small></div>
            </ReviewCard>
            <ReviewCard>
              <p>"When we launched our Blockchain project, we needed rock-solid security and credible branding. SerdyzNet's mentorship provided the clarity and tactical edge—a critical investment in our platform's integrity."</p>
              <div><strong>KEFAS ZAINAB TAMAR</strong><small>Startup Founder</small></div>
            </ReviewCard>
            <ReviewCard>
              <p>"SerdyzNet's Web Design and Branding templates instantly elevated my client portfolio from amateur to professional. The quality and attention to detail are unmatched. Worth every cen</p>
              <div><strong>AHMAD SALIHU NAKANDE</strong><small>Full Stack Developer</small></div>
            </ReviewCard>
          </ReviewsGrid>
        </ReviewsSection>

        {/* WhatsApp Float */}
        <WhatsAppFloat href="https://wa.me/234806543210" target="_blank">
          <Icons.WhatsAppIcon />
        </WhatsAppFloat>

      </InnerWrapper>
    </FullPageContainer>
  );
};

export default Support;