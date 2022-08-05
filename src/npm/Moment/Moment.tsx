import moment = require('moment');
import * as React from 'react';

const MomentTest = () => {
  const date1 = moment().utc().format('YYYY-MM-DD HH:mm:ss');
  const date2 = moment().format('YYYY-MM-DD HH:mm:ss');

  return (
    <div>
      {date1}
      <br />
      {date2}
    </div>
  );
};
export default MomentTest;
