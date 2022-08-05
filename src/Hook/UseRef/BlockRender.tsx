import * as React from 'react';

const BlockRender = () => {
  const dataRef = React.useRef(0);
  const [data, setData] = React.useState(0);
  const onClick = React.useCallback(() => {
    dataRef.current++;
    console.log(dataRef.current);
  }, []);

  return (
    <div>
      <button onClick={onClick} />
      <button onClick={() => setData((num) => num + 1)} />
    </div>
  );
};

export default BlockRender;
