import * as React from 'react';
import { Link } from 'react-router-dom';
import { v3, v4 } from 'uuid';
const UuidTest = () => {
  // const data3 = v3();

  const data4 = v4();

  return (
    <div>
      <Link
        to={
          'https://github.com/ha-jae-geun/jaegeunha/tree/master/PL/NodeJS/node_module/uuid'
        }
      >
        {' '}
        링크
      </Link>
      <br />
      {data4}
    </div>
  );
};
export default UuidTest;
