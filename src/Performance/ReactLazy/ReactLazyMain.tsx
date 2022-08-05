import * as React from 'react';
import ReactLazy from '../../Performance/ReactLazy/ReactLazy';
import { Link, useNavigate } from 'react-router-dom';

export default function ReactLazyMain() {
  function handleImportScript() {
    React.lazy(() => import('../../Performance/ReactLazy/ReactLazy'));
  }

  return <button onClick={handleImportScript}>버튼</button>;
}

// export default function ReactLazyMain() {
//   const loading = () => <p>Loading</p>;

//   return (
//     <React.Suspense fallback={loading()}>
//       <ReactLazy handleImportScript={handleImportScript} />
//     </React.Suspense>
//   );
// }
