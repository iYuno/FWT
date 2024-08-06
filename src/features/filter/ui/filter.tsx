import { Drawer } from 'antd';
import { useState } from 'react';
import s from './filter.module.scss';
import CloseIcon from '../../../shared/assets/icons/ui/closeIcon';
import PlusIcon from '../../../shared/assets/icons/ui/plusIcon';
import MinusIcon from '../../../shared/assets/icons/ui/minusIcon';
import Select from '../../../shared/ui/select/ui/select';
import Input from '../../../shared/ui/input/input';
import useTheme from '../../../entities/theme/lib/useTheme';
import TextButton from '../../../shared/ui/textButton/textButton';

interface FilterProps {
  isOpen: boolean;
  onClose: () => void;
}

function Filter({ isOpen, onClose }: FilterProps) {
  const [expandedFilters, setExpandedFilters] = useState([false, false, false]);
  const { theme } = useTheme();

  const handleToggle = (index: number) => {
    setExpandedFilters((prevState) => {
      const newExpandedFilters = [...prevState];
      newExpandedFilters[index] = !newExpandedFilters[index];
      return newExpandedFilters;
    });
  };

  const expandedHandler = (event: React.TransitionEvent<HTMLDivElement>, index: number) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (!expandedFilters[index] && event.currentTarget.classList.contains(s.expanded)) {
      event.currentTarget.classList.remove(s.expanded);
    } else if (expandedFilters[index] && !event.currentTarget.classList.contains(s.expanded)) {
      event.currentTarget.classList.add(s.expanded);
    }
  };

  const renderInput = (label: string, disabled: boolean) => {
    switch (label) {
      case 'Artist':
        return (
          <Select
            disabled={disabled}
            data={['Artist 1', 'Artist 2', 'Artist 3']}
          />
        );
      case 'Location':
        return (
          <Select
            disabled={disabled}
            data={['Location 1', 'Location 2', 'Location 3']}
          />
        );
      case 'Years':
        return (
          <div className={`${s.inputRangeWrapper} ${theme === 'light' ? s.light : s.dark}`}>
            <Input className={s.input} placeholder="From" disabled={disabled} />
            <MinusIcon className={s.dividerMinus} />
            <Input className={s.input} placeholder="To" disabled={disabled} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      getContainer={false}
      rootClassName={s.rootFillter}
      closeIcon={false}
      classNames={{
        content: s.drawerContent,
        body: s.drawerBody,
      }}
      mask={false}
    >
      <>
        <div className={s.filterHeader}>
          <button type="button" aria-label="close filter" className={s.iconBtn} onClick={onClose}>
            <CloseIcon className={s.closeIcon} />
          </button>
        </div>
        <div className={s.filterBody}>
          <div>
            {['Artist', 'Location', 'Years'].map((label, index) => (
              <div
                onTransitionEnd={(event) => expandedHandler(event, index)}
                className={s.filter}
                aria-expanded={expandedFilters[index]}
                key={label}
              >
                <div className={s.filterLabel}>
                  <h1>{label}</h1>
                  <button type="button" className={s.iconBtn} onClick={() => handleToggle(index)}>
                    {expandedFilters[index] ? (
                      <MinusIcon className={s.closeIcon} />
                    ) : (
                      <PlusIcon className={s.closeIcon} />
                    )}
                  </button>
                </div>
                {renderInput(label, !expandedFilters[index])}
              </div>
            ))}
          </div>
          <div className={s.btnWrapper}>
            <TextButton>Show the results</TextButton>
            <TextButton>Clear</TextButton>
          </div>
        </div>
      </>
    </Drawer>
  );
}

export default Filter;
