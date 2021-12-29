import React from "react";
import styled from "styled-components";
import DropDownMetaFooter from "./DropDownMetaFooter";

const StyledFooter = styled.div`
  color: #5c5c5c;
  padding: 0 22px;
  font-size: 12px;
  width: 100%;
  background-color: #f5f5f5;

  .subscribe {
    border-bottom: 1px solid #d1d1d1;
    margin: 0 auto;
    max-width: 1024px;
    padding: 20px 0;
    @media (max-width: 764px) {
      max-width: 100%;
    }
  }

  .footer-links {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(5, minmax(196px, 300px));
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    align-items: flex-start;
    line-height: 1.5rem;
    @media (max-width: 1024px) {
      display: grid;
      grid-gap: 5px;
      grid-template-columns: repeat(4, minmax(150px, 250px));
    }
    @media (max-width: 765px) {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #d1d1d1;
    }
  }

  .footer-links span:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #1d1d1d;
  }

  .link-section {
    @media (max-width: 764px) {
      display: none;
    }
  }

  .link-section div {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
  }

  .footer-meta-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1024px;
    margin: 0 auto;
    padding: 8px 0;
  }

  .footer-meta-text .retailer {
    color: #06c;
  }

  .footer-meta-text .retailer:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .footer-copyright {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 764px) {
      display: block;
    }
  }
  .footer-meta-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    @media (max-width: 1024px) {
      width: 60%;
      margin-top: 5px;
    }
    @media (max-width: 764px) {
      width: 100%;
      display: block;
      margin-top: 5px;
    }
  }

  .footer-meta-links span {
    padding-right: 10px;
    border-right: 1px solid #c4c4c4;
    margin-right: 7px;
  }

  .footer-meta-links span:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <footer>
        <div className="subscribe">
          <p>
            1. ₹99/month after free trial. One subscription per Family Sharing
            group. Offer is valid for 3 months after eligible device activation.
            Plan automatically renews until cancelled. Restrictions and other
            terms apply.
          </p>
          <p>
            Apple TV+ is ₹99/month after free trial. One subscription per Family
            Sharing group. Offer is valid for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions
            and other terms apply.
          </p>
        </div>
        <div className="footer-links">
          <DropDownMetaFooter />
          <div className="link-section">
            <h3>Shop and Learn</h3>
            <div>
              <span>Store</span>
              <span>Mac</span>
              <span>iPad</span>
              <span>iPhone</span>
              <span>Watch</span>
              <span>AirPods</span>
              <span>TV & Home</span>
              <span>iPod touch</span>
              <span>AirTag</span>
              <span>Accessories</span>
            </div>
          </div>

          <div className="link-section">
            <h3>Services</h3>
            <div>
              <span>Apple TV+</span>
              <span>Apple Arcade</span>
              <span>iCloud</span>
              <span>iPhone</span>
              <span>Apple One</span>
              <span>Apple Podcasts</span>
              <span>Apple Books</span>
              <span>App Store</span>
            </div>
          </div>

          <div className="link-section">
            <h3>Apple Store</h3>
            <div>
              <span>Ways to Buy</span>
              <span>Apple Trade In</span>
              <span>Recycling Programme</span>
              <span>Order Status</span>
              <span>Shopping Help</span>
            </div>
          </div>

          <div className="link-section">
            <h3>For Business</h3>
            <div>
              <span>Apple & Business</span>
            </div>
          </div>

          <div className="link-section">
            <h3>Apple Values</h3>
            <div>
              <span>Accessibility</span>
              <span>Environment</span>
              <span>Privacy</span>
              <span>Supplier Responsibility</span>
            </div>
          </div>

          <div className="link-section">
            <h3>For Education</h3>
            <div>
              <span>Apple and Education</span>
              <span>Shop for Education</span>
              <span>Shop for University</span>
            </div>
          </div>

          <div className="link-section">
            <h3>Account</h3>
            <div>
              <span>Manage Your Apple ID</span>
              <span>Apple Store Account</span>
              <span>iCloud.com</span>
            </div>
          </div>

          <div className="link-section">
            <h3>For Healthcare</h3>
            <div>
              <span>Apple in Healthcare</span>
              <span>Health on Apple Watch</span>
            </div>
          </div>

          <div className="link-section">
            <h3>About Apple</h3>
            <div>
              <span>Newsroom</span>
              <span>Apple Leadership</span>
              <span>Career Opportunities</span>
              <span>Investors</span>
              <span>Ethics & Compliance</span>
              <span>Events</span>
              <span>Contact Apple</span>
            </div>
          </div>
        </div>

        <div className="footer-meta-text">
          <p>
            More ways to <span className="retailer">Find a Retailer</span> near
            you. Or call 000800 040 1966
          </p>
          <div className="footer-copyright">
            <span>Copyright © 2021 Apple Inc. All rights reserved.</span>
            <div className="footer-meta-links">
              <span>Privacy Policy</span>
              <span>Terms of Use</span>
              <span>Sales Policy</span>
              <span>Legal</span>
              <span>Site Map</span>
            </div>
          </div>
        </div>
      </footer>
    </StyledFooter>
  );
}
