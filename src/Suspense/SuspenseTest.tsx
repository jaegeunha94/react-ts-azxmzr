import * as React from 'react';
import Posts from '../Suspense/Posts';

export default function SuspenseTest({ resource }) {
  const user = resource.user.read();

  return (
    <div>
      {user.name}({user.age})
      <React.Suspense fallback={<p>글목록 로딩중...</p>}>
        <Posts resource={resource} />
      </React.Suspense>
    </div>
  );
}
