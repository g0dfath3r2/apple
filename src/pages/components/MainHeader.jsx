import React from "react";
import styled from "styled-components";
import iPhonePro from "../../images/iphonePro.png";

const StyledMainHeader = styled.div`
  height: 100%;
  width: 100%;
  z-index: 3;
  padding-top: 44px;
  text-align: center;
  color: #1d1d1f;
  border-bottom: 12px solid #fff;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    @media (max-width: 1024px) {
      width: 80%;
      height: 80%;
    }
  }

  h1 {
    font-size: 56px;
    line-height: 1;
    font-weight: 600;
    margin: 0;
    @media (max-width: 1024px) {
      font-size: 48px;
    }
    @media (max-width: 765px) {
      font-size: 32px;
    }
  }
  span {
    color: #0066cc;
  }
  p {
    width: 80%;
    min-height: 44px;
    padding: 12px 0;
    margin: 0 auto;
    font-size: 14px;
  }

  .shop-now {
    background-color: #f5f5f7;
    min-height: 44px;
  }

  .iphone-pro {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 47px;
  }

  .iphone-pro p {
    font-size: 28px;
    line-height: 1.1;
    font-weight: 400;
    margin-top: 6px;
    margin-bottom: 0;
    @media (max-width: 1024px) {
      font-size: 24px;
      margin-top: 5px;
    }
    @media (max-width: 765px) {
      font-size: 19px;
      margin-top: 4px;
    }
  }

  .cta-links {
    margin-top: 13px;
    width: 203px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .cta-links a {
    text-decoration: none;
    color: #0066cc;
    font-size: 21px;
    @media (max-width: 1024px) {
      font-size: 19px;
    }
    @media (max-width: 765px) {
      font-size: 17px;
    }
  }
  .fal {
    position: relative;
    top: 2px;
  }
`;

export default function MainHeader() {
  return (
    <StyledMainHeader>
      <div className="shop-now">
        <p>
          Shop now at the Apple Store online with many great ways to buy. Get
          free, no-contact delivery, Specialist help and &nbsp;
          <span>
            more <i className="fal fa-angle-right"></i>
          </span>
        </p>
      </div>
      <div className="iphone-pro">
        <h1>iPhone 13 Pro</h1>
        <p>Oh.So.Pro.</p>
        <div className="cta-links">
          <a href="2">
            Learn More <i className="fal fa-angle-right"></i>
          </a>
          <a href="2">
            Buy <i className="fal fa-angle-right"></i>
          </a>
        </div>
        <img src={iPhonePro}></img>
      </div>
    </StyledMainHeader>
  );
}
