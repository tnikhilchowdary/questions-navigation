import React, {useState} from "react";


const Questions = [
  {label:"What is your name? ", name:"name", type:"text"},
  {label:"What is your age? ", name:"age", type:"text"},
  {label:"Where do you live?", name:"location", type:"text"},
];

export default function Questionsform(){
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData]= useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const currentQuestion = Questions[currentStep];

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const NextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  return(
    <div>
      <h1>Question {currentStep+1} of {Questions.length}</h1>
      <label>{currentQuestion.label}</label>
      <input type={currentQuestion.type}
      name={currentQuestion.name}
      value={formData[currentQuestion.name] || ""
      }
      onChange={handleChange}
      className="w-full border p-2 rounded"/>
      <button onClick={prevStep} disabled={currentStep === 0}>Prev Question</button>
      <button onClick={NextStep} disabled={currentStep === Questions.length-1}>Next Question</button>
    </div>
  )
}