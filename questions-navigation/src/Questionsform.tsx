import React from "react";


const Questions = [
  {label:"What is your name? ", name:"name", type:"text"},
  {label:"What is your age? ", name:"age", type:"text"},
  {label:"Where do you live?", name:"location", type:"text"},
];

export default function Questionsform(){
  const currentQuestion = Questions[0]
  return(
    <div>
      <h1>Question 1 of {Questions.length}</h1>
      <label>{currentQuestion.label}</label>
      <input type="text" className="w-full border p-2 rounded"/>
    </div>
  )
}