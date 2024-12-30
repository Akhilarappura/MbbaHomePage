import React from "react";
import "./Choose.css";

const Choose = () => {
  return (
    <div className="main">
      <div className="choose-1">
        <h1 className="text">Why Choose Us?</h1>
        <p>
          + India’s most trusted overseas education consultancy with a proven
          track record.
        </p>
        <p>+ Expert counselors guiding you to achieve your academic dreams.</p>
        <p>
          + Partnerships with top global universities offering diverse
          opportunities.
        </p>
        <p>+ Comprehensive support—from course selection to visa assistance.</p>
        <p>
          + Assistance with scholarships and funding options to make education
          affordable.
        </p>
        <p>+ A strong alumni network to support you throughout your journey.</p>
      </div>
      <div className="choose-image">
        <img
          src="https://argroupofeducation.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-06-at-6.01.46-PM.jpeg"
          alt="Study Abroad"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default Choose;
