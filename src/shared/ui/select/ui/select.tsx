import { Input } from 'antd';
import {
  memo, useEffect, useRef, useState,
} from 'react';
import s from './select.module.scss';
import useTheme from '../../../../entities/theme/lib/useTheme';

interface SelectProps {
  data: { id: number; name?: string; location?: string }[];
  onChange: (value: string | number) => void;
  disabled: boolean;
  value: string | number;
  placeholder?: string;
}

function Select({
  data, onChange, disabled, value, placeholder,
}: SelectProps) {
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentValue, setCurrentValue] = useState<string | number | ''>(value);
  const selecnWrapperRef = useRef <HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selecnWrapperRef.current && !selecnWrapperRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selecnWrapperRef]);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <div ref={selecnWrapperRef} className={`${s.selectWrapper} ${theme === 'light' ? s.light : s.dark}`} aria-expanded={isExpanded}>
      <Input
        value={currentValue}
        onChange={(event) => setCurrentValue(event.target.value)}
        className={s.selectInput}
        onClick={() => setIsExpanded(true)}
        placeholder={placeholder}
        disabled={disabled}
      />
      <ul className={s.selectVariants}>
        {data.map((item) => (
          <li
            key={item.location || item.name}
          >
            <button
              type="button"
              onClick={() => {
                setCurrentValue(item.location || item.name || '');
                onChange(item.id);
                setIsExpanded(false);
              }}
            >
              {item.location || item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Select.defaultProps = {
  placeholder: '',
};

export default memo(Select);
