import React, { useState } from "react";
import styled from "styled-components";

const StyledDrowDownFooter = styled.div`
  display: none;
  @media (max-width: 764px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 20px;
    width: 100%;
  }

  .footer-dropdown-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    /* padding-top: 20px; */
    border-bottom: 1px solid #c4c4c4;
    width: 100%;
  }

  .footer-dropdown-submenu {
    display: none;
    cursor: pointer;
    margin-bottom: 8px;
    @media (max-width: 764px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      font-weight: 300;
      color: #6e6e73;
      background-color: #f5f5f7;
      padding: 8px 0;
    }
  }
  .footer-dropdown-submenu:hover {
    background-color: #e2e2e2;
  }

  .footer-dropdown-submenu-cta-links {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 0px 20px;
    transition: max-height 500ms cubic-bezier(0.4, 0, 0.4, 1) 0ms;
    max-height: 0;
    height: auto;
    overflow: hidden;
  }
  .footer-dropdown-submenu-cta-links p:hover {
    background-color: #e2e2e2;
  }

  .footer-dropdown-submenu-cta-links p {
    width: 100%;
    margin: 0;
    padding: 5px 0px;
  }
`;

export default function DropDownMetaFooter() {
  const [footerDropdownMenu, setfooterDrowdownMenu] = useState([]);

  function handleMenuClick(e) {
    const elementId = e.target.id;

    setfooterDrowdownMenu((prevValues) =>
      footerDropdownMenu.includes(elementId)
        ? footerDropdownMenu.filter((htmlElementId) => {
            return htmlElementId !== elementId;
          })
        : [...prevValues, elementId]
    );
  }

  return (
    <StyledDrowDownFooter>
      <div className="footer-dropdown-menu">
        <div
          className="footer-dropdown-submenu"
          onClick={handleMenuClick}
          id="footer-meta-link1"
        >
          Shop and Learn
          <i className="fas fa-plus"></i>
        </div>
        <div
          className="footer-dropdown-submenu-cta-links"
          style={{
            maxHeight:
              footerDropdownMenu.includes("footer-meta-link1") && "1000px",
          }}
        >
          <p>Store</p>
          <p>Mac</p>
          <p>iPad</p>
          <p>iPhone</p>
          <p>Watch</p>
          <p>AirPods</p>
          <p>TV & Home</p>
          <p>iPod touch</p>
          <p>AirTag</p>
          <p>Accessories</p>
        </div>
      </div>

      <div className="footer-dropdown-menu">
        <div
          className="footer-dropdown-submenu"
          onClick={handleMenuClick}
          id="footer-meta-link2"
        >
          Services
          <i className="fas fa-plus"></i>
        </div>
        <div
          className="footer-dropdown-submenu-cta-links"
          style={{
            maxHeight:
              footerDropdownMenu.includes("footer-meta-link2") && "1000px",
          }}
        >
          <p>Apple Music</p>
          <p>Apple TV+</p>
          <p>Apple Arcade</p>
          <p>iCloud</p>
          <p>Watch</p>
          <p>Apple One</p>
          <p>Apple Books</p>
          <p>Apple Podcasts</p>
          <p>App Store</p>
        </div>
      </div>

      <div className="footer-dropdown-menu">
        <div
          className="footer-dropdown-submenu"
          onClick={handleMenuClick}
          id="footer-meta-link3"
        >
          Account
          <i className="fas fa-plus"></i>
        </div>
        <div
          className="footer-dropdown-submenu-cta-links"
          style={{
            maxHeight:
              footerDropdownMenu.includes("footer-meta-link3") && "1000px",
          }}
        >
          <p>Apple Music</p>
          <p>Apple TV+</p>
          <p>Apple Arcade</p>
          <p>iCloud</p>
          <p>Watch</p>
          <p>Apple One</p>
          <p>Apple Books</p>
          <p>Apple Podcasts</p>
          <p>App Store</p>
        </div>
      </div>

      <div className="footer-dropdown-menu">
        <div
          className="footer-dropdown-submenu"
          onClick={handleMenuClick}
          id="footer-meta-link4"
        >
          Apple Store
          <i className="fas fa-plus"></i>
        </div>
        <div
          className="footer-dropdown-submenu-cta-links"
          style={{
            maxHeight:
              footerDropdownMenu.includes("footer-meta-link4") && "1000px",
          }}
        >
          <p>Ways to Buy</p>
          <p>Apple Trade In</p>
          <p>Recycling Programme</p>
          <p>Order Status</p>
          <p>Shopping Help</p>
        </div>
      </div>

      <div className="footer-dropdown-menu">
        <div
          className="footer-dropdown-submenu"
          onClick={handleMenuClick}
          id="footer-meta-link5"
        >
          For Business
          <i className="fas fa-plus"></i>
        </div>
        <div
          className="footer-dropdown-submenu-cta-links"
          style={{
            maxHeight:
              footerDropdownMenu.includes("footer-meta-link5") && "1000px",
          }}
        >
          <p>Apple Business</p>
        </div>
      </div>

      <div className="footer-dropdown-menu">
        <div
          className="footer-dropdown-submenu"
          onClick={handleMenuClick}
          id="footer-meta-link6"
        >
          For Education
          <i className="fas fa-plus"></i>
        </div>
        <div
          className="footer-dropdown-submenu-cta-links"
          style={{
            maxHeight:
              footerDropdownMenu.includes("footer-meta-link6") && "1000px",
          }}
        >
          <p>Apple and Education</p>
          <p>Shop for Education</p>
          <p>Shop for University</p>
        </div>
      </div>

      <div className="footer-dropdown-menu">
        <div
          className="footer-dropdown-submenu"
          onClick={handleMenuClick}
          id="footer-meta-link7"
        >
          For Healthcare
          <i className="fas fa-plus"></i>
        </div>
        <div
          className="footer-dropdown-submenu-cta-links"
          style={{
            maxHeight:
              footerDropdownMenu.includes("footer-meta-link7") && "1000px",
          }}
        >
          <p>Apple in Healthcare</p>
          <p>Health on apple watch</p>
        </div>
      </div>

      <div className="footer-dropdown-menu">
        <div
          className="footer-dropdown-submenu"
          onClick={handleMenuClick}
          id="footer-meta-link8"
        >
          Apple values
          <i className="fas fa-plus"></i>
        </div>
        <div
          className="footer-dropdown-submenu-cta-links"
          style={{
            maxHeight:
              footerDropdownMenu.includes("footer-meta-link8") && "1000px",
          }}
        >
          <p>Accessibility</p>
          <p>Environment</p>
          <p>Privacy</p>
          <p>Supplier Responsibility</p>
        </div>
      </div>

      <div className="footer-dropdown-menu">
        <div
          className="footer-dropdown-submenu"
          onClick={handleMenuClick}
          id="footer-meta-link9"
        >
          About Apple
          <i className="fas fa-plus"></i>
        </div>
        <div
          className="footer-dropdown-submenu-cta-links"
          style={{
            maxHeight:
              footerDropdownMenu.includes("footer-meta-link9") && "1000px",
          }}
        >
          <p>Newsroom</p>
          <p>Apple Leadership</p>
          <p>Career Opportunities</p>
          <p>Investors</p>
          <p>Ethics & Compliance</p>
          <p>Events</p>
          <p>Contact Apple</p>
        </div>
      </div>
    </StyledDrowDownFooter>
  );
}
