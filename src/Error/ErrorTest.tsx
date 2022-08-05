import * as React from 'react';
import ErrorBoundary from './ErrorBoundaries';
import ErrorThrow from './ErrorThrow';

const ErrorTest = function () {
  return (
    <ErrorBoundary>
      <ErrorThrow />
    </ErrorBoundary>
  );
};

export default ErrorTest;
