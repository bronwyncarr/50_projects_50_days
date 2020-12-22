import React from "react";

function Faq(props) {
  // useState holds initial value and function to update that value
  // false is initial value set to collapsed(whether it is collapsed/not active), setCollapsed function updates collapsed value.
  const [collapsed, setCollapsed] = React.useState(false);
  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={collapsed ? `faq active` : `faq`}>
      <h3 className="faq-title">{props.question}</h3>
      <p className="faq-text">{props.answer}</p>
      <button className="faq-toggle" onClick={handleClick}>
        <i className="fas fa-chevron-down"></i>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}

export default Faq;
