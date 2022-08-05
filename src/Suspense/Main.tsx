import * as React from 'react';
import fetchData from '../Suspense/FetchData';
import Spinner from '../Suspense/Spinner';
import SuspenseTest from '../Suspense/SuspenseTest';

export default function Main() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <SuspenseTest resource={fetchData('1')} />
    </React.Suspense>
  );
}
