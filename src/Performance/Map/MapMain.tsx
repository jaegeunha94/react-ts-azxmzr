import * as React from 'react';
import MapTest from '../../Performance/Map/MapTest';

export default function MapMain() {
  const [number, setNumber] = React.useState([1, 2, 3, 4, 5]);

  const listNumbers = number.map((value, index) => (
    // <MapTest key={index} number={value} />
    <MapTest number={value} />
  ));

  const handleChangeList = () => {
    setNumber([2, 2, 3, 4, 5]);
  };

  const handleChangeList2 = () => {
    setNumber([1, 3, 3, 4, 5]);
  };

  return (
    <div>
      <button onClick={handleChangeList} />
      <button onClick={handleChangeList2} />
      {listNumbers}
    </div>
  );
}
