import * as React from 'react';

const DidUpdate = () => {
  const mountRef = React.useRef(false);
  const [data, setData] = React.useState(0);

  const handleSetData = () => {
    setData((num) => num + 1);
  };

  React.useEffect(() => {
    if (mountRef.current) {
      console.log('updated!');
    } else {
      console.log('first');
      mountRef.current = true;
    }
  });
  return <button onClick={handleSetData} />;
};
export default DidUpdate;
