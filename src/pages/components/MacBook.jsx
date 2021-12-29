import React from "react";
import macBookPro from "../../images/macbook-pro.png";
import styled from "styled-components";

const StyledMacBookContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 624px;
  text-align: center;
  position: relative;
  top: -56px;
  background-color: #fff;

  .mac-book {
    padding-top: 44px;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .mac-book div {
    position: relative;
    z-index: 9;
  }

  h1 {
    font-size: 56px;
    font-weight: 600;
    margin: 0;
    @media (max-width: 1024px) {
      font-size: 48px;
    }
    @media (max-width: 765px) {
      font-size: 32px;
    }
  }

  p {
    font-size: 28px;
    font-weight: 400;
    margin: 6px 0 0;
    color: #1d1d1f;
    @media (max-width: 1024px) {
      font-size: 24px;
      margin-top: 5px;
    }
    @media (max-width: 765px) {
      font-size: 19px;
      margin-top: 4px;
    }
  }

  img {
    width: 90%;
    height: 100%;
    object-fit: cover;
    position: relative;
    left: 0;
    /* top: -50px; */
    z-index: 2;
    @media (max-width: 1024px) {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 765px) {
      width: 90%;
      height: 80%;
      object-fit: contain;
    }
  }

  .cta-links {
    margin: 0.65em auto 0;
    width: 203px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cta-links a {
    text-decoration: none;
    color: #06c;
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

export default function MacBook() {
  return (
    <StyledMacBookContainer>
      <div className="mac-book">
        <div>
          <h1>MacBookPro</h1>
          <p>SuperCharged for Pros</p>
        </div>
        <div className="cta-links">
          <a href="2">
            Learn More <i className="fal fa-angle-right"></i>
          </a>
          <a href="2">
            Buy <i className="fal fa-angle-right"></i>
          </a>
        </div>
        <img src={macBookPro} alt="" />
      </div>
    </StyledMacBookContainer>
  );
}
