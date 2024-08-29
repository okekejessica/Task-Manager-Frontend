import React, { useState } from "react";
import downArr from "../assets/Arrdown.png";

const DropDown = ({ setTag }) => {
  // const [tag, setTag] = useState("Select a Tag");
  const [options, setOptions] = useState(["Urgent", "Important"]);
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOption = (option) => {
    setSelected(option);
    setIsOpen(false);
    setTag(option);
  };
  return (
    <div className="tag-new position-relative rounded-2 py-4 px-5">
      <h3 className="position-absolute">Tags</h3>
      <div
        onClick={toggleDropdown}
        className="d-flex align-items-center justify-content-between"
      >
        <div className="d-flex align-items-center gap-4">
          <p className="m-0 py-1 px-2 rounded-1">
            {selected || "Select a Tag"}
          </p>
        </div>
        <img
          src={downArr}
          style={{
            transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
            transition: "0.5s ease-in-out",
          }}
          alt=""
        />
      </div>

      <ul className="position-absolute list-unstyled mt-4 bg-secondary w-100 start-0 rounded-2 p-1 text-white">
        {isOpen
          ? options.map((option) => {
              return (
                <li
                  onClick={() => {
                    return handleOption(option);
                  }}
                  key={option}
                  className="p-1 "
                  style={{ cursor: "pointer" }}
                >
                  {option}
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default DropDown;
