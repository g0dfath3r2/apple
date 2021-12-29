import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCollectionItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 47px;
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  padding-top: 44px;
  text-align: center;

  .collection-logo {
    width: 100%;
    max-width: 430px;
    height: 100%;
    max-height: 34px;
  }

  .collection-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .collection-img {
    width: 100%;
    height: 100%;
  }

  .collection-img img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    @media (max-width: 765px) {
      width: 70%;
      height: 100%;
    }
  }

  .cta-links {
    margin: 0 auto 12px;
    width: 203px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cta-links a {
    text-decoration: none;
    color: #06c;
    font-size: 17px;
  }
  .fal {
    position: relative;
    top: 2px;
  }

  h1 {
    margin: 0;
  }
  h3 {
    color: #5c5c5c;
    font-weight: 400;
    font-size: 20px;
    max-width: 400px;
  }
`;

export default function CollectionItem({ logoText, imgLogo, text, img }) {
  return (
    <StyledCollectionItem>
      {imgLogo ? (
        <div className="collection-logo">
          <img src={imgLogo} alt="" />{" "}
        </div>
      ) : (
        <div className="collection-logo">
          <h1>{logoText}</h1>
        </div>
      )}
      {text && <h3>{text}</h3>}
      {text && (
        <div className="cta-links">
          <a href="2">
            Learn More <i className="fal fa-angle-right"></i>
          </a>
          <a href="2">
            Buy <i className="fal fa-angle-right"></i>
          </a>
        </div>
      )}

      <div className="collection-img">
        <img src={img} alt="" />
      </div>
    </StyledCollectionItem>
  );
}

CollectionItem.propTypes = {
  imgLogo: PropTypes.string,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  logoText: PropTypes.string,
};
