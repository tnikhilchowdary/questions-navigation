import React, {useState} from "react";

const questions = [
    {label:"What is your name?", name:"name", type:"text"},
    {label:"What is your age?", name:"age", type:"number"},
    {label:"Where do you live", name:"location", type:"text"},
];

export default function Questionsform(){               
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        if(currentStep < questions.length -1){
            setCurrentStep(currentStep + 1)
        }
    }

    const handlePrev = () => {
        if(currentStep > 0){
            setCurrentStep(currentStep - 1);
        }
    }

    return(
        <div>
            <h1>Welcome to the Survey page</h1>
            <div>
                <input
                type={questions.type}

                />
            </div>
        </div>
    )
}