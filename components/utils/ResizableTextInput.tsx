import React, { useRef, useEffect } from 'react';

const ResizableTextInput = () => {
  const textareaRef = useRef(null);

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 300)}px`; // Set max height to 300px
    }
  };

  useEffect(() => {
    adjustTextareaHeight(); // Adjust height on initial render
  }, []);

  return (
    <div style={{ width: 'auto', margin: 'auto' }}>
      <textarea
        ref={textareaRef}
        style={{
          width: '100%',
          minHeight: '50px',
          maxHeight: '300px', // Set max height
          resize: 'none', // Disable manual resizing
          overflowY: 'auto', // Show scrollbar when content exceeds max height
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '5px',
          boxSizing: 'border-box', // Include padding in the total height
        }}
        onChange={adjustTextareaHeight} // Adjust height on content change
      />
    </div>
  );
};

export default ResizableTextInput;
