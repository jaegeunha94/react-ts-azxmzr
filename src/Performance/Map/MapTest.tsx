import * as React from 'react';

interface State {}

interface Props {
  number: number;
}

export default function MapTest<State, Props>(props) {
  const number = props.number;

  return <li>{number}</li>;
}
