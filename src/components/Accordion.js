// src/components/Accordion.jsx
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded mb-4 overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 bg-yellow-100 text-red-700 font-semibold hover:bg-yellow-200 transition-colors"
      >
        <span>{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-white text-gray-800 leading-relaxed space-y-2">
          {children}
        </div>
      )}
    </div>
  );
}
