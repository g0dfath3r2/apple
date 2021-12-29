import React, { useState } from "react";
import styled from "styled-components";
import DropdownHeader from "./DropdownHeader";

const StyledHeaderContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  color: #1d1d1f;
  max-height: 44px;
  width: 100%;

  left: 0;
  right: 0;
  font-size: 17px;
  z-index: 1000;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  @media (max-width: 765px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  a {
    color: #e8e8eb;
    text-decoration: none;
    font-size: 12px;
    padding: 0px 8px;
  }

  a:hover {
    color: #ffffff;
  }

  a .fa-apple {
    color: #f5f5f7;
  }

  a .fa-apple:hover {
    color: #ffffff;
  }

  .bars {
    display: none;
    cursor: pointer;
    color: #f5f5f7;
    @media (max-width: 765px) {
      display: initial;
    }
  }
  .cta-links-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    position: fixed;
    height: 44px;
    margin: 0px 162px;
    padding: 0 22px;
    z-index: 1001;
    @media (max-width: 1024px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 20px;
      margin: 0;
    }
    @media (max-width: 764px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
    }
  }

  .cta-links {
    @media (max-width: 764px) {
      display: none;
    }
  }
  .menu-mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1000;
    opacity: 1;
    transition: opacity 0.3s ease 0s;
  }
`;

export default function Header() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <StyledHeaderContainer>
      <div className="cta-links-container">
        <div className="bars" onClick={handleClick}>
          {isClicked ? (
            <i className="far fa-times "></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
        <a href="#1">
          <i className="fab fa-apple fa-2x"></i>
        </a>

        <a className="cta-links" href="#1">
          Store
        </a>
        <a className="cta-links" href="#1">
          Mac
        </a>
        <a className="cta-links" href="#1">
          iPad
        </a>
        <a className="cta-links" href="#1">
          iPhone
        </a>
        <a className="cta-links" href="#1">
          Watch
        </a>
        <a className="cta-links" href="#1">
          AirPods
        </a>
        <a className="cta-links" href="#1">
          Tv & Home
        </a>
        <a className="cta-links" href="#1">
          Only on Apple
        </a>
        <a className="cta-links" href="#1">
          Accessories
        </a>
        <a className="cta-links" href="#1">
          Support
        </a>
        <a className="cta-links" href="#1">
          <i className="fal fa-search"></i>
        </a>
        <a href="#1">
          <i className="fas fa-shopping-bag"></i>
        </a>
      </div>
      <div className={`${isClicked && "menu-mask"}`}>
        <DropdownHeader isClicked={isClicked} />
      </div>
    </StyledHeaderContainer>
  );
}
