import React from "react";
import GitProfile from "./GitProfile";

export default {
    title: "pal/gitProfile",
    component: GitProfile,
  };
  

  const Template = (args) => <GitProfile {...args} />;


  export const DefaultProfile = Template.bind({});
DefaultProfile.args = {
  username: "pallavi",
};

export const CustomProfile = Template.bind({});
CustomProfile.args = {
  username: "AKASH",
  avatarUrl: "https://via.placeholder.com/150x150/FF0000/FFFFFF?text=Flower",
  name: "akash",
};

export const basic = Template.bind({});
basic.args ={
  username:"vinay",
  name:"vinay",
  location:"San Francisco, CA" ,
  avatarUrl:"https://github.com/octocat.png",
  profileUrl:"https://github.com/octocat",
  company:"GitHub",
  email:"octocat@github.com",
  bio:"I am the vinay, I love open source and making new friends."
};
 
