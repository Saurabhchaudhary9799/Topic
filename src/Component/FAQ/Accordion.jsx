import React, { useState } from "react";

// A single accordion item
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-5/6 flex flex-col gap-y-2  p-1">
      <div
        className=" flex p-2 border rounded-3xl "
        onClick={() => {
          setIsOpen(!isOpen);
          console.log(isOpen);
        }}
        style={{ cursor: "pointer", userSelect: "none" }}
      >
        <div className=" w-4/6  text-xl font-bold">{title} </div>
        <div className=" w-2/6 flex justify-end">
          <i class="bi bi-chevron-down"></i>
        </div>
      </div>
      {isOpen && (
        <div className="  flex flex-start text-lg font-bold text-gray-400 ">
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className=" p-2 flex flex-col items-center gap-y-2">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
