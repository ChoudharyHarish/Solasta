import React from "react";
import PatronCard from "../components/Patroncard";
// import teamBg from "../assets/images/teamBg.jpg";
import "./patron.css";

export default function Patrons() {
  return (
    <>
      <div className="team-section">
        <h1 className="text-[3rem] md:text-[5rem]  text-white  text-center">
          Our Patrons
        </h1>
        <div className="first">
          <PatronCard
            name="Dr. D.V.L.N Somayajulu"
            designation="Director"
            photo="director.png"
          />
          <PatronCard
            name="Shri. K. Gurumurthy"
            photo="registrar.jpeg"
            designation="Registrar"
          />
        </div>
        <div className="second">
          <PatronCard
            name="Dr. Korra Sathya Babu "
            designation="HOD, CSE"
            photo="hod cse.png"
          />
          <PatronCard
            name="Dr. K. Krishna Naik"
            photo="hod ece.jpeg"
            designation="HOD, ECE"
          />
          <PatronCard
            name="Dr. Pullarao Muvvala"
            designation="HOD, ME"
            photo="hod mech.jpg"
          />
          <PatronCard
            name="Dr. Ravindra Katta"
            photo="hod sci.png"
            designation="HOD, SCIENCES"
          />
        </div>
        <div className="second">
          <PatronCard
            name="Dr. Akhtar Khan"
            designation="Associate Dean (Academics) "
            photo="asd academics.png"
          />
          <PatronCard
            name="Dr. J. Krishnaiah"
            photo="asd faculty.png"
            designation="Associate Dean (Faculty Dean)"
          />
          <PatronCard
            name="Dr. P Ranga Babu"
            designation="Associate Dean (Planning & Development)"
            photo="asd p & d.jpg"
          />
          <PatronCard
            name="Dr. Naresh Babu M."
            photo="asd sa.jpg"
            designation="Associate Dean (Student Affairs)"
          />
        </div>
      </div>
    </>
  );
}
