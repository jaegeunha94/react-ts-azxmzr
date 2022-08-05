//App.jsx
import * as React from 'react';
import InputFunctionalComponent from '../../Hook/UseImperativeHandle/InputFunctionalComponent';

export default function UseImperativeHandle() {
  const inputRef = React.useRef(null);

  const handleButton = () => {
    inputRef.current.autoFocus();
  };

  return (
    <div className="App">
      <div>
        <h1>비어있는 input 요소를 focus 해봅시다.</h1>
        <button onClick={handleButton}>Focus 하기!</button>
      </div>
      <InputFunctionalComponent ref={inputRef} />
    </div>
  );
}
