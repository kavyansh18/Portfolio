import React, { useEffect } from "react";
import "../Components/UI/Pfp.css";
import "../Components/UI/BubbleTxt.css";

const splitTextIntoSpans = (target: string) => {
  const elements = document.querySelectorAll<HTMLElement>(target);
  elements.forEach((element) => {
    element.classList.add("split-text");
    const text = element.innerText;
    const splitText = text
      .split(" ")
      .map((word, wordIndex) => {
        const chars = word
          .split("")
          .map((char, charIndex) => {
            return `<span key="${wordIndex}-${charIndex}" class="split-char">${char}</span>`;
          })
          .join("");
        return `<div key="${wordIndex}" class="split-word">${chars}&nbsp;</div>`;
      })
      .join("");
    element.innerHTML = splitText;
  });
};

const Pfp: React.FC = () => {
  useEffect(() => {
    splitTextIntoSpans(".bubble-text");
  }, []);

  return (
    <div className="z-1">
      <div className="conteudo__geral">
        <div className="cartao cartao0">
          <div className="elemento__interno-borda">
            <div className="container">
              {/* <h2 className="text-[12px] mt-3 bubble-text text">
                Let's talk about Virat & code
              </h2> */}
            </div>
            <div className="caixa__icones">
              <a
                href="https://github.com/kavyansh18"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a
                href="https://instagram.com/kavyansh.in"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/kavyansh-kumar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="https://twitter.com/0xkavyansh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pfp;
