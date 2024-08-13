import React from 'react';
import Duck from './assets/duck.jpg';
import './Loginnew.css'; 

const Loginnew = () => {
  return (
    <div className="box-container">
      <div className="close-button">&times;</div>
      <div className="login-card">
        <div className="image-section" style={{ backgroundImage: `url(${Duck})` }}></div>
        <div className="content-section">
          <div className="styled-card-content">
            <h1 className="title">
              Stay
              <span className="highlight"> On.</span>
            </h1>
            <h2 className="subtitle">Log in or Create account</h2>
            <input type="email" placeholder="Email address" className="styled-textfield" />
            <div className="button-container">
              <button className="continue-button">Continue</button>
              <span className="or-text">OR</span>
              <button className="social-button google-button">&#xf1a0;</button>
              <button className="social-button apple-button">&#xf179;</button>
              <button className="social-button facebook-button">&#xf09a;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginnew;
