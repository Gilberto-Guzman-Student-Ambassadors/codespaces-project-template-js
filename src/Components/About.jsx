/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/workspace-background.jpg";

const imageAltText = "A desk with a computer, a plant, and a coffee";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Software Enginner student, I'm interested in everything related to technology and sotfware development.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web & desktop development",
  "Cloud technologies",
  "Cybersecurity",
  "Educator",
  "Technical computer support",
  "",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Im a student of Software Development Engineering at the Autonomous University of Chiapas (UNACH). I have certificates and awards granted by companies such as Microsoft, Core Group (Network for cybersecurity), Cisco, among others. My certifications are: AZ-900, SC-900, CCNAv7. I have also given lectures regarding technological topics such as ChatGPT, React, Markdown and inclusion, such as strategies for students with High Functioning Autism Spectrum Disorder (ASD or Asperger Syndrome) in institutions such as the Benemérita Universidad Autónoma de Puebla (BUAP), UNACH, Core Group and others. I Have been awarded a Space Zero Gravity scholarship by the Institute of Science and Technology of Chiapas, and i'm currently a Microsoft scholarship recipient in the Student Ambassador program. In addition to being willing to learn about different areas and continue preparing professionally.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
