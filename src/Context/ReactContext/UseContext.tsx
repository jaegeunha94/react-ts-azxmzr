import * as React from 'react';
import { testContext } from './TestContext';

export default function UseContext() {
  const test = React.useContext(testContext);
  return <button>{test}</button>;
}
