import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledDropdownHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 0vh;
  /* max-height: 0; */
  width: 100%;
  background-color: #000;
  color: #fff;
  position: absolute;
  /* transform: translateY(-100%); */
  top: 40px;
  transition: all 500ms cubic-bezier(0.3, 0, 0.3, 1) 0ms;
  z-index: 100000;

  .link {
    width: 100%;
    padding: 12px 0px;
    text-decoration: none;
    border-bottom: 1px solid #d6d6d6;
  }
  .links {
    padding: 0px 40px;
    width: 100%;
  }
  .link a {
    padding: 0;
    font-size: 16px;
  }
  .link:hover {
    background-color: #242424;
  }

  .search {
    width: 100%;
    padding: 10px 5px;
    border-bottom: 1px solid #d6d6d6;
  }
  .search-input {
    width: 100%;
    padding: 10px 5px;
    background-color: #333333;
    color: #c7c7c7;
    border: none;
    outline: none;
    border-radius: 8px;
    font-size: 14px;
  }
`;

export default function DropdownHeader({ isClicked }) {
  return (
    <StyledDropdownHeader style={isClicked ? { height: "100vh" } : {}}>
      <div className="search">
        <input
          type="text"
          name="search"
          id=""
          placeholder="Search apple.com"
          className="search-input"
        />
      </div>
      <div className="links">
        <div className="link">
          <a href="#1">Store</a>
        </div>
        <div className="link">
          <a href="#1">Mac</a>
        </div>
        <div className="link">
          <a href="#1">iPad</a>
        </div>
        <div className="link">
          <a href="#1">iPhone</a>
        </div>
        <div className="link">
          <a href="#1">Watch</a>
        </div>
        <div className="link">
          <a href="#1">AirPods</a>
        </div>
        <div className="link">
          <a href="#1">Tv & Home</a>
        </div>
        <div className="link">
          <a href="#1">Only on Apple</a>
        </div>
        <div className="link">
          <a href="#1">Accessories</a>
        </div>
        <div className="link">
          <a href="#1">Support</a>
        </div>
      </div>
    </StyledDropdownHeader>
  );
}

DropdownHeader.propTypes = {
  isClicked: PropTypes.bool.isRequired,
};
