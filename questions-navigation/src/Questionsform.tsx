import React, {useState} from "react";


const Questions = [
  {label:"What is your name? ", name:"name", type:"text"},
  {label:"What is your age? ", name:"age", type:"text"},
  {label:"Where do you live?", name:"location", type:"text"},
];

export default function Questionsform(){
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData]= useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const currentQuestion = Questions[currentStep];

  

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
      <button onClick={() => setCurrentStep(currentStep - 1)} disabled={currentStep === 0}>Prev Question</button>
      <button onClick={() => {
        if(currentStep === Questions.length -1){
          setSubmitted(true);
        }
        else{
          setCurrentStep(currentStep + 1);
        }
      }}>
        {currentStep === Questions.length - 1 ? "Submit" : "Next Question"}
      </button>
      <div>
        {submitted && (
          <div>
            <h2>Survey Results</h2>
            <ul>
              {Object.entries(formData).map(([key, value]) => (
                <li key={key}>
                  <strong>{value}</strong>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}