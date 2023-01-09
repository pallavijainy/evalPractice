import React from "react";
import Project from "./Project";

export default {
  title: "pal/Project",
  component: Project,
};

const Template = (args) => <Project {...args} />;

export const DefaultProject = Template.bind({});
DefaultProject.args = {
  name: "My Project",
  description: "This is my project",
  link: "https://myproject.com",
};

export const CustomProject = Template.bind({});
CustomProject.args = {
  name: "My Awesome Project",
  description: "This is my awesome project",
  link: "https://myawesomeproject.com",
  imageUrl: "https://via.placeholder.com/150x150/FF0000/FFFFFF?text=Flower",
};

export const FullProject = Template.bind({});
FullProject.args = {
  name: "My Super Awesome Project",
  description: "This is my super awesome project",
  link: "https://mysuperawesomeproject.com",
  imageUrl: "https://via.placeholder.com/150x150/00FF00/FFFFFF?text=Fruit",
  technologies: ["React", "Node.js", "MongoDB"],
};
