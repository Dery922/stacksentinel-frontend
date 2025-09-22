import { useState } from "react";
import "./FAQ.css"; // We'll create this CSS file

const FAQToggle = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button 
        className="faq-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="faq-title">{title}</h3>
        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
      </button>
      
      {isOpen && (
        <div className="faq-content">
          <p className="faq-text">{children}</p>
        </div>
      )}
    </div>
  );
};

export default FAQToggle;