import React from "react";
import Efeito from "./efeito";
import Forcasa from "../Content/img/forCasa.png";
//import Tanto from "../Content/img/tanto.png";
//import PostoSeis from "../Content/img/posto-seis.png";
import Espirales from "../Content/img/espirales.png";
import CoffeCup from "../Content/img/coffe.png";
import Soft from "../Content/img/soft.png";
import Instagram from "../Content/img/instagram-logo.png";
import Perfil2 from "../Content/img/perfil2.png";
import PrimoCappo from "../Content/img/primoCappo.png";
import "./styles.css";

const Content = () => (
  <>
    <div className="container">
      <p className="text-center p-content">Tipos de sites</p>
      <br />
      <h2 className="text-center text-content">
        Escolha o plano ideal para o seu negócio
      </h2>
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div className="card">
            <div className="host1">Estático</div>
            <img src="" class="card-img-top img-color" alt="" />

            <div className="card-body card-bacckground-color-1">
              {/*<h5 className="card-title title-color-1">R$1200</h5>*/}
              <br />
              {/*Podendo ser parcelado em 3X*/}
              <p className="card-text"></p>
              <br />
              <br />
              <ul>
                <li> - Sem mensalidade</li>
                <br />
                <li> - Modelo de Site one page </li>
                <br />
                <li> - Site responsivo (Mobile) </li>
                <br />
                <li> - Integração com Instagram Feed</li>
                <br />
                <li> - Botão para Whatsapp</li>
                <br />
                <li> - Acompanhamento de métricas Google Analytics </li>
                <br />
                <li>Marcação em tags (palavras-chaves)</li>
                <br />
                <li></li>
                <li></li>
              </ul>
              <a href="#" class="btn btn-primary">
                Quero saber mais...
              </a>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div className="card">
            <div className="host2">Dinâmico / Blog</div>

            <div className="card-body card-bacckground-color-1">
              {/*<h5 className="card-title title-color-2 ">R$1500</h5>*/}
              <br />
              {/*} Podendo ser parcelado em 3X*/}
              <p className="card-text">
                <br />
                <br />
                <ul>
                  <li> - Não existe mensalidade</li>
                  <br />
                  <li> - Site one page</li>
                  <br />
                  <li> - Site PWA (Se comporta como um APP no celular)</li>
                  <br />
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </p>
              <a href="#" class="btn btn-primary">
                Quero saber mais...
              </a>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div className="card">
            <div className="host3">E-commerce</div>

            <div className="card-body card-bacckground-color-1">
              {/*<h5 className="card-title title-color-3">R$2800</h5>*/}
              <br />
              {/*Podendo ser parcelado em 3X*/}
              <p className="card-text">
                <br />
                <br />
                <ul>
                  <li> - Não existe mensalidade</li>
                  <br />
                  <li> - Site one page</li>
                  <br />
                  <li> - Site PWA (Se comporta como um APP no celular)</li>
                  <br />
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </p>
              <a href="#" class="btn btn-primary">
                Quero saber mais...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container container-content">
      <h1 id="" className="text-center text-uppercase title-works">
        Alguns trabalhos
      </h1>
      <Efeito />
      <div className="row">
        <div
          id="content-box-01"
          className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
        >
          <a
            href="https://ocariocawebdesign.github.io/promocoes-delivery/"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img className="img-thumbnail works" src={PrimoCappo} alt="" />
          </a>
        </div>
        <div
          id="content-box-02"
          className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
        >
          <a
            href="https://www.forlifeburiticlube.com.br/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="img-thumbnail img-fluid works"
              src={Forcasa}
              alt=""
            />
          </a>
        </div>

        <div
          id="content-box-01"
          className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
        >
          <a
            href="https://espirales.netlify.app"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="img-thumbnail img-fluid works"
              src={Espirales}
              alt=""
            />
          </a>
        </div>

        {/* Aqui vai iniciar redes sociais e portfólio */}

        <div
          id="content-box-01"
          className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
        >
          <a
            href="https://ocariocawebtemplate.gatsbyjs.io/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="img-thumbnail img-fluid works"
              src={Perfil2}
              alt=""
            />
          </a>

          {/* Aqui vai finalizar redes sociais e portfólio */}
        </div>
      </div>
    </div>

    <div className="centralizar-coffe">
      <a
        href="https://api.whatsapp.com/send?phone=5521971025148&text=Ol%C3%A1!%20Quero%20informa%C3%A7%C3%B5es%20sobre%20Desenvolvimento%20de%20sites..."
        target="_blank"
        rel="noreferrer"
        cacak7
      >
        <button className="btn btn-primary-mod-02 text-button-size coffe-button swing ">
          Vamos tomar um café?
        </button>
      </a>
      <img src={CoffeCup} className="img-fluid" />
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#440055"
        fill-opacity="0.8"
        d="M0,96L1440,192L1440,320L0,320Z"
      ></path>
    </svg>
  </>
);

export default Content;
