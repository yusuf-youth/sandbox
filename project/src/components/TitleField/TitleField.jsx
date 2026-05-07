import React, { useEffect, useRef, useState } from "react";

function TitleField({ title, setTitle }) {
  const [text, setText] = useState(title);
  const textareaRef = useRef(null);

  const onChange = (e) => {
    setText(e.target.value);
    setTitle(e.target.value)
  };

  useEffect(() => {
    if (textareaRef.current) {
      // Reset height to auto to get the correct scrollHeight for shrinking
      textareaRef.current.style.height = "auto";
      // Set height based on the scrollHeight
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]); // Re-run whenever text changes

  return (
    <textarea
      className="document__title-field title-field h2 reset-input"
      ref={textareaRef}
      value={text}
      onChange={onChange}
      placeholder="Name document"
      rows={1}
    />
  );
}

export default TitleField;
