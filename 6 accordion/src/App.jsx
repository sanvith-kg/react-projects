import { useState } from "react";

const faq = [
  {
    question: "What is React?",
    answer: "A JavaScript library.",
  },
  {
    question: "What is JSX?",
    answer: "JavaScript XML.",
  },
  {
    question: "What is State?",
    answer: "Stores component data.",
  },
];
const App = () => {
  const [open, setopen] = useState(null);

  return (
    <div>
      <h1>Accordian</h1>
      {faq.map((ele, index) => {
        return (
          <div className="card">
            <h3
              style={{ cursor: "pointer" }}
              onClick={() => setopen(open === index ? null : index)}
            >
              {ele.question}
            </h3>
            {open === index && <p>{ele.answer}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default App;
