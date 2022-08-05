import * as React from 'react';

const SaveDom = () => {
  const divRef = React.useRef(null);

  const handleFocus = () => {
    divRef.current.click();
  };

  const handleAlert = () => {
    alert('test');
  };

  return (
    <div>
      <button onClick={handleFocus} />
      <button ref={divRef} onClick={handleAlert}>
        Basic
      </button>
    </div>
  );
};
export default SaveDom;
