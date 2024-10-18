import { Input } from "antd";
import { useEffect, useRef, useState, useCallback } from "react";
import useTheme from "../../lib/useTheme";
import s from "./select.module.scss";

interface SelectProps {
  data: { id: number; name?: string; location?: string }[];
  onChange: (value: string | number | null) => void;
  disabled: boolean;
  value: string | number;
  placeholder?: string;
}

function Select({ data, onChange, disabled, value, placeholder }: SelectProps) {
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentValue, setCurrentValue] = useState<string | number | "">(value);
  const selectWrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      selectWrapperRef.current &&
      !selectWrapperRef.current.contains(event.target as Node)
    ) {
      setIsExpanded(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      onChange(null);
    }
    setCurrentValue(event.target.value);
  };

  const handleOptionSelect = (item: {
    id: number;
    name?: string;
    location?: string;
  }) => {
    setCurrentValue(item.location || item.name || "");
    onChange(item.id);
    setIsExpanded(false);
  };

  const filteredData = data.filter(item => {
    const searchValue = currentValue.toString().toLowerCase();
    return (
      (item.name && item.name.toLowerCase().includes(searchValue)) ||
      (item.location && item.location.toLowerCase().includes(searchValue))
    );
  });

  return (
    <div
      ref={selectWrapperRef}
      className={`${s.selectWrapper} ${theme === "light" ? s.light : s.dark}`}
      aria-expanded={isExpanded}>
      <Input
        value={currentValue}
        onChange={handleInputChange}
        className={s.selectInput}
        onClick={() => setIsExpanded(true)}
        placeholder={placeholder}
        disabled={disabled}
      />
      {isExpanded && (
        <ul className={s.selectVariants}>
          {filteredData.length > 0 ? (
            filteredData.map(item => (
              <li key={item.id}>
                <button type="button" onClick={() => handleOptionSelect(item)}>
                  {item.location || item.name}
                </button>
              </li>
            ))
          ) : (
            <li className={s.notFound}>Nothing found</li>
          )}
        </ul>
      )}
    </div>
  );
}

Select.defaultProps = {
  placeholder: "",
};

export { Select };
