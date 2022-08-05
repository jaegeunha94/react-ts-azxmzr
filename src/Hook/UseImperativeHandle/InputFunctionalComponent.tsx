import * as React from 'react';

const InputFunctionalComponent = React.forwardRef((_, ref) => {
  const multipleInput = React.useMemo(
    () => Array.from({ length: 4 }).map(() => React.createRef()),
    []
  );

  React.useImperativeHandle(ref, () => ({
    autoFocus: () => {
      multipleInput.every((input) => {
        const currentInput: any = input.current;

        if (currentInput.value === '') {
          currentInput.focus();
          console.log('비어있는 input을 focus 하였습니다.');
          return false;
        }

        return true;
      });
    },
  }));

  return (
    <form ref={ref}>
      {Array.from({ length: 4 }).map((_, i) => (
        <input type="text" ref={multipleInput[i]} key={i} />
      ))}
    </form>
  );
});

export default InputFunctionalComponent;
