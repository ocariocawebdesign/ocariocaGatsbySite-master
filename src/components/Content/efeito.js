import React from "react";

class Efeito extends React.Component {
  componentDidMount() {
    //Efeito nas imagens
    function Efeito(seletor) {
      const element = document.querySelectorAll(seletor);
      this.adiciona = function (classe) {
        element.forEach((item) => {
          const estado01 = item.classList.contains(classe);
          if (estado01 === false) {
            item.addEventListener("mouseenter", () => {
              item.classList.toggle(classe);
            });
          }
        });
      };
    }
    const imgAtiva = new Efeito(".works");
    imgAtiva.adiciona("efeito-pulse");
  }
  render() {
    return <></>;
  }
}
export default Efeito;
