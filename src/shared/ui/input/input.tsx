import { Input as AntdInput } from 'antd';
import {
  ChangeEvent, InputHTMLAttributes, memo, useState,
} from 'react';
import s from './input.module.scss';
import useTheme from '../../../entities/theme/lib/useTheme';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly className?: string,
  onChangeProp: (value: string) => void,
}

function Input({ className, ...props }: InputProps) {
  const {
    value,
    onChangeProp,
    onBlur,
    // onFocus,
    onKeyDown,
    placeholder,
    disabled,
  } = props;

  const { theme } = useTheme();
  const [inputData, setinputData] = useState<string>('');

  const onChangeinputData = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 4) {
      setinputData(e.target.value);
      onChangeProp(e.target.value);
    }
  };
  return (
    <AntdInput
      disabled={disabled}
      type="number"
      maxLength={4}
      value={value ?? inputData}
      placeholder={placeholder}
      className={`${theme === 'light' ? s.light : s.dark} ${s.input} ${className}`}
      onBlur={onBlur}
      // onFocus={(event) => event.target.blur()}
      onChange={onChangeinputData}
      onKeyDown={onKeyDown}
    />
  );
}

Input.defaultProps = {
  className: '',
};

export default memo(Input);
