"use client"
import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./faq.css"


export default function Faq({question,answer}) {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="App ">
        <div>
          <button
            className={`question-section ${active}`}
            onClick={toggleAccordion}
          >
            <div className="">
              <div className="question-align mb-10">
                <h4 className="question-style">
                  {question} 
                </h4>
                <FiChevronDown
                  className={active ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef}
                className={active ? `answer bg-[#080612] answer-divider` : `bg-[#080612] answer `}
              >
                <p className="bg-[#080612]">{answer}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
