import React, { useState, useRef, useEffect } from "react";

const DescriptionField = ({ description, setDescription }) => {
  const [value, setValue] = useState(description);
  const textareaRef = useRef(null);

  const onChange = (e) => {
    setValue(e.target.value);
    setDescription(e.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      // Reset height to auto to get the correct scrollHeight for shrinking
      textareaRef.current.style.height = "auto";
      // Set height based on the scrollHeight
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]); // Re-run whenever text changes

  return (
    <textarea
      className={`document__description-field has-focus description-field reset-input`}
      ref={textareaRef}
      value={value}
      onChange={onChange}
      placeholder="Describe"
      rows={1}
    />
  );
};

export default DescriptionField;
