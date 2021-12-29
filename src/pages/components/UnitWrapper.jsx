import React from "react";
import styled from "styled-components";
import iPhoneGallery from "../../images/iphone-gallery.jfif";

const StyledUnitWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: center;
  /* z-index: 2; */
  padding-top: 47px;
  background-color: #38273a;
  /* position: relative; */
  overflow: hidden;
  top: -44px;

  h2 {
    color: #f5f5f7;
    font-size: 56px;
    margin: 0;
    @media (max-width: 1024px) {
      font-size: 48px;
    }
    @media (max-width: 765px) {
      font-size: 32px;
    }
  }
  p {
    color: #ffafd2;
    font-size: 30px;
    margin-top: 0;
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
    z-index: 2;
    position: relative;
    left: 0;
    top: -50px;
    /* right: 0; */
    width: 100%;
    height: 100%;
    border-bottom: 12px solid #fff;
    border-style: none;

    object-fit: cover;
    @media (max-width: 1024px) {
      width: 80%;
      height: 80%;
    }
  }

  .unit-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .unit-wrapper div {
    position: relative;
    z-index: 9;
  }

  .cta-links {
    margin: 0 auto;
    width: 203px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cta-links a {
    text-decoration: none;
    color: #2997ff;
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

export default function UnitWrapper() {
  return (
    <StyledUnitWrapper>
      {/* <img src={iPhoneGallery} alt="" /> */}

      <div className="unit-wrapper">
        <div>
          <h2>iPhone 13</h2>
          <p>Your new superpower</p>
        </div>
        <div className="cta-links">
          <a href="2">
            Learn More <i className="fal fa-angle-right"></i>
          </a>
          <a href="2">
            Buy <i className="fal fa-angle-right"></i>
          </a>
        </div>
        <img src={iPhoneGallery} alt="" />
      </div>
    </StyledUnitWrapper>
  );
}
