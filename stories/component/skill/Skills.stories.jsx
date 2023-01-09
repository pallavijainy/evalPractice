import React from "react";

import Skills from "./Skills";


export default {
    title: "skil/Skills",
    component: Skills,
  };

  const Template = (args) => <Skills {...args} />;


  export const DefaultSkills = Template.bind({});
DefaultSkills.args = {
  skills: ["JavaScript", "HTML", "CSS"],
  education: ["Bachelor's degree in Computer Science"],
  projects: [
    {
      name: "Project 1",
      description: "A project I worked on",
    },
    {
      name: "Project 2",
      description: "Another project I worked on",
    },
  ],
};

export const CustomSkills = Template.bind({});
CustomSkills.args = {
  skills: ["Python", "React", "Node.js"],
  education: ["Master's degree in Data Science"],
  projects: [
    {
      name: "Project A",
      description: "A project I led",
    },
    {
      name: "Project B",
      description: "Another project I contributed to",
    },
  ],
};
