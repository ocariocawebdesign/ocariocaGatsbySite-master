import React from "react";
import "./styles.css";
import Logo from "../Header/img/logo-grey.png";
//import Ilustracao from "../Header/img/ocarioca-ilustracao-1.png";
//import Ocarioca from "../Header/img/ocarioca-rounded.png";

import "../css/animate.min.css";
//import AnimateClass from "./script";
const Posts = () => (
  <>
    <header id="header-top">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 section-1-logo">
            <div id="logo">
              <img className="img-fluid" src={Logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Posts;
