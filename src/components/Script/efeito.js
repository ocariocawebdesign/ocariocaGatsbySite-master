import React from "react";

class AnimateClass extends React.Component {
  componentDidMount() {
    class Efeito {
      constructor(seletor) {
        const element = document.querySelectorAll(seletor);
        //Função que adicona a classe
        this.adiciona = function (classe) {
          element.forEach((item) => {
            item.classList.add(classe);
          });
        };
      }
    }
    const buttonWp = new Efeito("button");
    buttonWp.adiciona("animate__animated animate__swing animate__repeat-6");
  }
  render() {
    return <></>;
  }
}
export default AnimateClass;
