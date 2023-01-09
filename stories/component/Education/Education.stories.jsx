import React from "react";
import Education from "./Education";

export default {
  title: "pal/Education",
  component: Education,
};

const Template = (args) => <Education {...args} />;

export const DefaultEducation = Template.bind({});
DefaultEducation.args = {
  school: "Jiwaji University",
  degree: "Bachelor of Commerce",
  fieldOfStudy: "Computer Science",
  startDate: "September 2018",
  endDate: "May 2020",
};

export const CustomEducation = Template.bind({});
CustomEducation.args = {
  school: "Harvard University",
  degree: "Master of English",
  fieldOfStudy: "Data Science",
  startDate: "September 2020",
  endDate: "May 2022",
};

export const FullEducation = Template.bind({});
FullEducation.args = {
  school: "MIT",
  degree: "Manager",
  fieldOfStudy: "Artificial Intelligence",
  startDate: "September 2022",
  endDate: "May 2026",
  description: "I am currently pursuing Full stack developer."
};
