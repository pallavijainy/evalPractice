import React from "react";

const Education = ({ school, degree, fieldOfStudy, startDate, endDate, description }) => {
  return (
    <div className="education">
      <h3 className="education__school">{school}</h3>
      <p className="education__degree">{degree} in {fieldOfStudy}</p>
      <p className="education__dates">{startDate} - {endDate}</p>
      {description && <p className="education__description">{description}</p>}
    </div>
  );
};

export default Education;
