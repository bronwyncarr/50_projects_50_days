import React from "react";

function Faq(props) {
  return (
    <div class="faq active">
      <h3 class="faq-title">{props.question}</h3>
      <p class="faq-text">{props.answer}</p>
      <button class="faq-toggle"  >
        <i class="fas fa-chevron-down"></i>
        <i class="fas fa-times"></i>
      </button>
    </div>
  );
}

export default Faq;
