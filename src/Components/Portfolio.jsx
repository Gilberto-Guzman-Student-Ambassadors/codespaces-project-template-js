/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/team-work.jpg";

const imageAltText = "Working and dialoguing as a team";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Courses Taught",
    description: "Lectures that I have given in person and virtually on technology topics.",
    url: "https://github.com/Gilberto-Guzman",
  },
  {
    title: "My Resume Site",
    description: "Portafolio web creado con React, Typescript y Material UI.",
    url: "https://github.com/Gilberto-Guzman/gilberto-guzman.github.io",
  },
  {
    title: "Hand Sign Detection",
    description:
      "Sign language detector which identifies the first 3 letters of the alphabet, is made with python and custom tkinter.",
    url: "https://github.com/Gilberto-Guzman/HandSignDetection_CTK",
  },
  {
    title: "trabajos.unach Website",
    description:
      "Linkedin-like web app to connect UNACH students with employers, made with the php framework Laravel and Tailwind.",
    url: "https://github.com/Gilberto-Guzman/trabajosunach",
  },
  {
    title: "Syntactic Lexical And Semantic Analyzer",
    description:
      "It analyzes a series of variable assignment statements in a very simple programming language, developed with Python.",
    url: "https://github.com/Gilberto-Guzman/Analizador_Lexico_Sintactico_Y_Semantico",
  },
  {
    title: "Periodic Table",
    description:
      "It is a periodic table of the chemical elements made with excel, it has a database, a search engine and a panel which shows the element, its atomic number, name, symbol and atomic mass.",
    url: "https://github.com/Gilberto-Guzman/Periodic-Table-Excel",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
