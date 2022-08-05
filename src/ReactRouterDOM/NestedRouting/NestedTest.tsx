import * as React from 'react';
import { Outlet } from 'react-router-dom';

export default function NestedTest() {
  return (
    <div>
      NestedTest
      <Outlet />
    </div>
  );
}
