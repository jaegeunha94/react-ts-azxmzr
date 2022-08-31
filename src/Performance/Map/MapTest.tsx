import * as React from 'react';

const MapTest = (props) => {
  const number = props.number;

  return <li>{number}</li>;
};

export default React.memo(MapTest);
