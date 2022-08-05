import * as React from 'react';
import BeforeSuspenseUser from '../../Suspense/BeforeSuspense/BeforeSuspenseUser';

function BeforeSuspense() {
  return (
    <main>
      <h2>Suspense 미사용</h2>
      <BeforeSuspenseUser userId="1" />
    </main>
  );
}

export default BeforeSuspense;
