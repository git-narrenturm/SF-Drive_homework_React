import React, { useState } from "react";

const CollapseElement = (props) => {

  let [isOpened, toggleCollapseElement] = useState(false);
  const handleClick = (e) => {
    let button = e.target;
    button.classList.toggle("collapse-set__button_is-active");
    let content = button.nextElementSibling;
    if (!isOpened) {
      content.style.maxHeight = content.scrollHeight + "px";
      toggleCollapseElement(true);
    }
    else {
      content.style.maxHeight = 0;
      toggleCollapseElement(false);
    };
  }

  return (
    <div className="collapse-set__item" data-opened={isOpened}>
      <button type="button" className="collapse-set__button" onClick={handleClick}>{props.question}</button>
      <div className="collapse-set__content" style={{maxHeight: 0}}>
        <p className="collapse-set__text">{props.answer}</p>
      </div>
    </div>
  );

}

export default CollapseElement;