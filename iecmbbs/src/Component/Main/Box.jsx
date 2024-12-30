import React from "react";
import "./Box.css";

export default function Box() {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "300px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#2c3f69",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "90%",
          gap: "5px",
          paddingBottom: "19px",
          borderRadius: "10px",
        }}
      >
        <h1>TAKE A FLIGHT TOWARDS YOUR DREAM WITH US!.</h1>
        <h1>Begin your Educational Journey Today.</h1>

        <div className="Box-button" style={{}}>
          Apply Now
        </div>
      </div>
    </div>
  );
}
