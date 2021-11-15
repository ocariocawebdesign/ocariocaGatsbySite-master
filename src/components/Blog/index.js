import React from "react";
import ReactDOM, { render } from "react-dom";
import parse from "html-react-parser";
import "./styles.css";

//https://www.npmjs.com/package/html-react-parser

class Blog extends React.Component {
  componentDidMount() {
    const apiUrl = "https://ocariocawebdesign.com/wp-json/wp/v2/posts";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        function dadosWp() {
          const dadosPost = {
            //Post mais recente
            title: data[0].title.rendered,
            slug: data[0].slug,
            content: data[0].content.rendered,
            autor: data[0].author_info.display_name,
            postDate: data[0].date,
            categorias: data[0].categories,
            //linkPost: data[0].guid.rendered,
            //Segundo post
            titlePost1: data[1].title.rendered,
            slugPost1: data[1].slug,
            contentPost1: data[1].content.rendered,
            autorPost1: data[1].author_info.display_name,
            postDatePost1: data[1].date,
            categoriasPost1: data[1].categories,
            //linkPost1: data[1].guid.rendered,
            //Terceiro post
            titlePost2: data[2].title.rendered,
            slugPost2: data[2].slug,
            contentPost2: data[2].content.rendered,
            autorPost2: data[2].author_info.display_name,
            postDatePost2: data[2].date,
            categoriasPost2: data[2].categories,
            //linkPost2: data[2].guid.rendered,
          };

          const element = (
            <>
              <h3>Micro Blog</h3>
              <div className="post-box">
                <div>
                  <h1> {parse(dadosPost.title)} </h1>
                  <p>{parse(dadosPost.content)}</p>
                  <br />
                  <p className="p-data">Data do post: {dadosPost.postDate}</p>
                  <p className="p-autor">Autor: {dadosPost.autor}</p>
                </div>

                <div>
                  <h1> {parse(dadosPost.titlePost1)} </h1>
                  <p>{parse(dadosPost.contentPost1)}</p>
                  <br />
                  <p className="p-data">Data do post: {dadosPost.postDatePost1}</p>
                  <p className="p-autor">Autor: {dadosPost.autorPost1}</p>
                </div>

                <div>
                  <h1> {parse(dadosPost.titlePost2)} </h1>
                  <p>{parse(dadosPost.contentPost2)}</p>
                  <br />
                  <p className="p-data">Data do post: {dadosPost.postDatePost2}</p>
                  <p className="p-autor">Autor: {dadosPost.autorPost2}</p>
                </div>
              </div>
            </>
          );

          const result = document.querySelector("#result");
          ReactDOM.render(element, document.querySelector("#result"));
        }
        dadosWp();
      });
  }

  render() {
    return <></>;
  }
}
export default Blog;
