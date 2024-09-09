import { Input as AntdInput } from 'antd';
import {
  ChangeEvent, InputHTMLAttributes, useCallback, useState,
} from 'react';
import _debounce from 'lodash/debounce';
import s from './search.module.scss';
import useTheme from '../../../entities/theme/lib/useTheme';
import SearchLogo from '../../../shared/assets/icons/ui/searchIcon';
import CloseIcon from '../../../shared/assets/icons/ui/closeIcon';
import { changeQuery, resetQuery } from '../model/searchSlice';
import { useAppDispatch } from '../../../shared/lib/store/redux';

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

function Search({ className, ...props }: SearchProps) {
  const {
    value,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    placeholder,
  } = props;

  const { theme } = useTheme();
  const [searchData, setSearchData] = useState<string>('');
  const dispatch = useAppDispatch();

  const debouncedDispatch = useCallback(
    _debounce((v) => dispatch(changeQuery(v)), 250),
    [dispatch],
  );

  const onChangeSearchData = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
    debouncedDispatch(e.target.value);
  }, [debouncedDispatch]);

  const resetSearchData = () => {
    setSearchData('');
    dispatch(resetQuery());
  };

  return (
    <AntdInput
      type="text"
      value={value ?? searchData}
      placeholder={placeholder}
      className={`${theme === 'light' ? s.light : s.dark} ${s.search} ${className}`}
      prefix={<SearchLogo className={s.prefix} />}
      suffix={(
        <button
          type="button"
          aria-label="clear"
          onClick={resetSearchData}
          className={`${s.suffix} ${searchData.length === 0 ? s.invisible : ''}`}
        >
          <CloseIcon />
        </button>
      )}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange ?? onChangeSearchData}
      onKeyDown={onKeyDown}
    />
  );
}

Search.defaultProps = {
  className: '',
};

export default Search;
