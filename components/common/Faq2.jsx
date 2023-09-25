"use client"
import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./faq2.css"


export default function Faq2({question,answer}) {
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
      <div className="App mb-4">
        <div>
          <button
            className={`question-section ${active}`}
            onClick={toggleAccordion}
          >
              <div className="question-align mt-2 mb-10 h-8 ">
                <h4 className="question-style -mt-[2px]">
                  {question} 
                </h4>
                <FiChevronDown
                  className={active ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef}
                className={active ? `answer  answer-divider` : ` answer `}
              >
                <p className="">{answer}</p>
              </div>
          </button>
        </div>
      </div>
    </>
  );
}
