import { Input } from 'antd';
import {
  memo, useEffect, useRef, useState,
} from 'react';
import s from './select.module.scss';
import useTheme from '../../../../entities/theme/lib/useTheme';

interface SelectProps {
  data: string[];
  onChange: (value: string) => void;
  disabled: boolean;
}

function Select({ data, onChange, disabled }: SelectProps) {
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentValue, setCurrentValue] = useState<string | ''>('');
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

  return (
    <div ref={selecnWrapperRef} className={`${s.selectWrapper} ${theme === 'light' ? s.light : s.dark}`} aria-expanded={isExpanded}>
      <Input
        value={currentValue}
        onChange={(event) => setCurrentValue(event.target.value)}
        className={s.selectInput}
        onClick={() => setIsExpanded(true)}
        placeholder="Select the location"
        disabled={disabled}
      />
      <ul className={s.selectVariants}>
        {data.map((item) => (
          <li
            key={item}
          >
            <button
              type="button"
              onClick={() => {
                setCurrentValue(item);
                setIsExpanded(false);
              }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(Select);
