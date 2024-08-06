import { Input as AntdInput } from 'antd';
import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import s from './search.module.scss';
import useTheme from '../../../entities/theme/lib/useTheme';
import SearchLogo from '../../../shared/assets/icons/ui/searchIcon';
import CloseIcon from '../../../shared/assets/icons/ui/closeIcon';

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly className?: string
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
  const [SearchData, setSearchData] = useState<string>('');
  const onChangeSearchData = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };
  return (
    <AntdInput
      type="text"
      value={value ?? SearchData}
      placeholder={placeholder}
      className={`${theme === 'light' ? s.light : s.dark} ${s.search} ${className}`}
      prefix={<SearchLogo className={s.prefix} />}
      suffix={<button type="button" aria-label="clear" onClick={() => setSearchData('')} className={`${s.suffix} ${SearchData.length === 0 ? s.invisible : ''}`}><CloseIcon /></button>}
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
