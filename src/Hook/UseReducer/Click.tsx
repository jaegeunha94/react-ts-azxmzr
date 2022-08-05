import * as React from 'react';
import { AppContext } from './AppContext';

const Click = () => {
  const dispatch = React.useContext(AppContext);

  const onClickButton = () => {
    dispatch('up');
  };

  return <button onClick={onClickButton}>눌러주세요</button>;
};

export default Click;
