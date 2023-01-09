import React from "react";
import MyButton from "./MyButton";

export default{
    title:"pal/MyButton",            //kis heading k niche ayega jaise example h
    component:MyButton,                    // nam se ayega
};

const Template=(args)=> <MyButton {...args}/>

// export const DisableButton=<MyButton  disable={true}/>     // different buttons bnke ayege
export const DisableButton = Template.bind({});
DisableButton.args={
    disabled: true,
};



// export const ClickableButton=<MyButton onClick={console.log}/>

export const ClickableButton = Template.bind({});
ClickableButton.args={
    onClick: () => console.log("Hello")
};







