import * as React from 'react';
import { testContext } from './TestContext';

export default class ContextType extends React.Component {
  static contextType = testContext;

  render() {
    const test = this.context;

    if (test === 'Test') return <p>"Test"</p>;
    else
      return (
        <p>
          "컨텍스트는 모든 레벨에서 일일이 props를 넘기지 않고도 컴포넌트 트리에
          걸쳐서 데이터를 전달할 수 있는 방법을 제공합니다."
        </p>
      );
  }
}
