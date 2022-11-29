import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "mdb-react-ui-kit/dist/css/mdb.rtl.min.css";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";
import WOW from "wowjs";
import headerStyle from "./css/header.module.css";

export default function Header() {
  const [showBasic, setShowBasic] = useState(true);
  const [headerAnimation, setHeaderAnimation] = useState("");
  const [headerLimitPassed, setHeaderLimitPassed] = useState(null);

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
    if (window.pageYOffset < 70) setHeaderLimitPassed(false);
    else if (window.pageYOffset > 70) setHeaderLimitPassed(true);

    // if(headerLimitPassed) {setHeaderAnimation("wow fadeInDown");}
  }, [headerLimitPassed]);

  return (
    <>
      <header>
        <MDBNavbar expand="lg" light bgColor="white" fixed>
          {/* <MDBNavbar style={{bgcolor:'red'}} className="" expand="lg" light bgColor="white" fixed> */}
          <MDBContainer fluid>
            <MDBNavbarToggler
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <MDBIcon fas icon="bars" />
            </MDBNavbarToggler>
            <MDBCollapse show={showBasic}>
              <MDBNavbarNav right className="mb-2 mb-lg-0">
                <MDBNavbarItem active>
                  <MDBNavbarLink aria-current="page" href="#">
                    <Link to={`costumes/`}>Home</Link>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">Features</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">Pricing</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">About</MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        {/* <div className="p-5 text-center bg-light">
          <h1 className="mb-3">Heading</h1>
          <h4 className="mb-3">Subheading</h4>
          <MDBBtn tag="a" outline size="lg">
            Call to action
          </MDBBtn>
        </div> */}
      </header>
    </>
  );
}
