import React from "react";
import styled from "styled-components";
import CollectionItem from "../../components/CollectionItem";
import iPadMiniLogo from "../../images/ipad-mini-logo.png";
import iPadMini from "../../images/ipad-mini.jpg";
import AppleWatch from "../../images/apple-watch.jpg";
import watchLogo from "../../images/watch-logo.png";
import AirPods from "../../images/air-pods.jpg";
import homePod from "../../images/homepod-mini.jfif";
import Arcade from "../../images/arcade.png";
import AngryBirds from "../../images/angry-birds.jpg";
import AppleTv from "../../images/apple-tv.jpg";
import appleTvLogo from "../../images/apple-tv-logo.png";

const StyledCollectionModule = styled.div`
  width: 100%;
  height: 100%;
  padding: 44px 10px 0;
  position: relative;
  z-index: 5;
  top: -44px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: 12px solid #fff;
  @media (max-width: 765px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function CollectionModule() {
  return (
    <StyledCollectionModule>
      <CollectionItem
        imgLogo={watchLogo}
        text={"Introducing our largest display yet"}
        img={AppleWatch}
      />

      <CollectionItem
        imgLogo={iPadMiniLogo}
        text={"Mega power. Mini sized"}
        img={iPadMini}
      />

      <CollectionItem
        logoText={"AirPods"}
        text={"All-new with Spatial Audio"}
        img={AirPods}
      />

      <CollectionItem
        logoText={"HomePod Mini"}
        text={"yello, orange and blue available in november"}
        img={homePod}
      />

      <CollectionItem
        imgLogo={Arcade}
        text={
          "Get 3 months free when you buy a new iPhone, iPad, iPad touch, Apple TV or Mac"
        }
        img={AngryBirds}
      />

      <CollectionItem
        imgLogo={appleTvLogo}
        img={AppleTv}
        text={"Subscribe now"}
      />
    </StyledCollectionModule>
  );
}
