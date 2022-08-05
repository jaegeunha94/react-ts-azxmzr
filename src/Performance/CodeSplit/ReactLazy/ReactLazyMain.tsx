import * as React from 'react';

export default function ReactLazyMain() {
  const NewPopup = React.lazy(() =>
    import('../../Performance/ReactLazy/ReactLazy')
  );
  const loading = () => <p>Loading</p>;

  return (
    <React.Suspense fallback={loading()}>
      <NewPopup />
    </React.Suspense>
  );
}

// export default function ReactLazyMain() {
//   const loading = () => <p>Loading</p>;

//   return (
//     <React.Suspense fallback={loading()}>
//       <ReactLazy handleImportScript={handleImportScript} />
//     </React.Suspense>
//   );
// }
