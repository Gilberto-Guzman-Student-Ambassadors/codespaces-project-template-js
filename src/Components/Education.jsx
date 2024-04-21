import React from "react";

const experienceList = [
  {
    title: "UNACH",
    date: "2020 - 2024",
    description: "Degree in software development engineering",
  },
  {
    title: "Professional Intership 1",
    date: "2022",
    description: "Fullstack Laravel Web Developer. CYBAC TI, S.A. de C.V.",
  },
  {
    title: "Professional Intership 2",
    date: "2023",
    description:
      "Instructor, content creator and writer. Core Group (Red Por La Ciberseguridad) and Microsoft",
  },
  {
    title: "Microsoft Student Ambassador (Alpha)",
    description: "I am currently being trained for beta level",
  },
  {
    title: "Social Service",
    date: "2024",
    description:
      "I am currently developing a web application with Node JS to automate student registration applications at the Assistant Secretary of Interinstitutional Relations",
  },
];

const Education = () => {
  return (
    <section className="light" id="education" style={{ textAlign: "center" }}>
      <h2>Education</h2>
      <div className="education-grid">
        {experienceList.map((experience) => (
          <div
            className="education-cell"
            key={experience.title}
            style={{ marginTop: "3rem", marginBottom: "3rem" }}
          >
            <h3>{experience.title}</h3>
            <h5>{experience.date}</h5>
            <p>{experience.description}</p>
            <hr />
          </div>
        ))}
      </div>
      <p></p>
      <button
        style={{
          marginBottom: "3rem",
          padding: "1rem 2rem",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "1rem",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => window.open("https://gilberto-guzman.github.io/certification/", "_blank")}
      >
        Check all of my Certifications and Knowledge here
      </button>
    </section>
  );
};

export default Education;
