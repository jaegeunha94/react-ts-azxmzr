import * as React from 'react';

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // static getDerivedStateFromError(error) {
  //   // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
  //   return { hasError: true };
  // }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      hasError: true,
    });
    // You can also log error messages to an error reporting service here
  }

  // componentDidCatch(error, errorInfo) {
  //   // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
  //   alert(error)
  //   this.setState({ hasError: true });
  // }

  render() {
    if (this.state.hasError == true) {
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
