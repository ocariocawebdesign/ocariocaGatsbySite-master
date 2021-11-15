import React from "react";
import "./styles.css";
import Logo from "../Header/img/logo-grey.png";
import Ilustracao from "../Header/img/logo-mobile.png";
import Ocarioca from "../Header/img/profile.jpg";
import GitHub from "../Header/img/GitHub_Logo.png";
import LinkedIn from "../Header/img/linkedin.png";
//import HomeOffice from "../Header/img/homeOffice.jpg";

//import Blog from "../Blog/index";
import "../css/animate.min.css";
//import AnimateClass from "./script";
const Header = () => (
  <>
    <header id="header-top">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 section-1-logo">
            <div id="logo">
              <img className="img-fluid" src={Logo} alt="Logo O Carioca Web" />
            </div>
            <br />
            <div className="centralizar">
              <h1 className="h1header">
                Dê vida e voz para o seu negócio na internet
              </h1>
              <h2 className="h2header">Descubra como é simples criar páginas e enviar campanhas de email marketing para converter visitantes em clientes e fazer seu negócio </h2>

              
            </div>

            {/*<div className="centralizar">
              <a
                href="https://github.com/ocariocawebdesign"
                target="_blank"
                rel="noreferrer"
                title="Acesse meu GitHub"
                alt="Perfil do Github"
              >
                <img className="img-fluid" src={GitHub} width="82" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/ocariocawebdesign/"
                target="_blank"
                rel="noreferrer"
                title="Acesse meu LinkedIn"
                alt="Perfil do LinkedIn"
              >
                <img className="img-fluid" src={LinkedIn} width="82" alt="" />
              </a>
              </div>*/}
            <br />
            <br />
            <div className="">
              <a
                href="https://api.whatsapp.com/send?phone=5521971025148&text=Ol%C3%A1!%20Quero%20informa%C3%A7%C3%B5es%20sobre%20Desenvolvimento%20de%20sites..."
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-primary-mod-02 text-button-size swing">
                  Saiba mais!
                </button>
              </a>
            </div>
            <br />
          </div>
              
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 box-02">
            {/*<h1 className="text-left h1-header">Desenvolvimento de websites</h1>*/}
            <div className="ilustracao-margin">
              <img
                className="img-fluid img-ilustracao"
                src={Ilustracao}
                alt=""
              />
            </div>
            <section id="wp-posts">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div
                      id="result"
                      className="animate__animated animate__fadeIn animate__repeat-6"
                    >
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Header;
