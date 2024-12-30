import React from "react";
import "./Submit.css";
import Input from "./Input";

export default function Submit() {
  return (
    <div className="submit-main">
      <div className="submit-1">
        <div className="submit-2">
          <h1 style={{ color: "white", textAlign: "center" }}>
            Fill This Form Below and Take The First Step Towards Your Dream!
          </h1>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Input placeholder={"Name"} />
            <Input placeholder={"Email(required)"} />
            <Input placeholder={"Phone number(required)"} type="tel" />
            <Input placeholder={"Enter your state(required)"} />
          </div>
        </div>
        <div className="submit-3">
          <h1 style={{ color: "white" }}>
            Factors before studying MBBS in Abroad
          </h1>
          <ul style={{ color: "white" }}>
            <li>
              Conduct thorough research on the university. Know the University
              before applying for admission.
            </li>
            <li>
              Know the environment, and weather conditions of the specific
              country.
            </li>
            <li>
              Know the language requirement. Research if the university conducts
              the program in English.
            </li>
            <li>
              Research the number of Indian students studying in their
              respective countries.
            </li>
            <li>
              Know the safety aspects of the University and Country as well.
            </li>
            <li>Know the cost of living in the country.</li>
            <li>Set a budget plan for MBBS in Abroad.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
