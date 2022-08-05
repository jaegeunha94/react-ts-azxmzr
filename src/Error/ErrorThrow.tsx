import * as React from 'react';

const ErrorThrow = function () {
  const [count, setCount] = React.useState(0);
  const a = {};

  function handleClick() {
    setCount((count) => count + 1);
  }

  if (count === 5) {
    // Simulate a JS error
    throw new Error('I crashed!');
  }

  return (
    <div>
      <button onClick={handleClick} />
    </div>
  );
};

export default ErrorThrow;
