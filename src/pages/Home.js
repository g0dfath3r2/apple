import React from "react";
// import styled from "styled-components";
import Header from "../components/Header";
import MainHeader from "./components/MainHeader";
import UnitWrapper from "./components/UnitWrapper";
import MacBook from "./components/MacBook";
import CollectionModule from "./components/CollectionModule";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <MainHeader />
      <UnitWrapper />
      <MacBook />
      <CollectionModule />
      <Footer />
    </div>
  );
}
