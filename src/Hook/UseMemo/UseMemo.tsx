import * as React from 'react';

function UseMemo() {
  const [number, setNumber] = React.useState(0);
  const [dark, setDark] = React.useState(false);

  const doubleNumber = React.useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = React.useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);

  React.useEffect(() => {
    console.log('theme changed');
  }, [themeStyles]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        테마 변경하기
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  console.log('느린 작업을 수행합니다...');
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default UseMemo;
