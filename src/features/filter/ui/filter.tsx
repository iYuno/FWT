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
import { useFetchAuthorsQuery } from '../../../shared/api/author/author';
import { useFetchLocationsQuery } from '../../../shared/api/location/location';
import { useAppDispatch } from '../../../shared/lib/store/redux';
import { IFilterState } from '../model/types';
import { changeFilter, resetFilter } from '../model/filterSlice';

interface FilterProps {
  isOpen: boolean;
  onClose: () => void;
}

function Filter({ isOpen, onClose }: FilterProps) {
  const [expandedFilters, setExpandedFilters] = useState([false, false, false]);
  const { theme } = useTheme();
  const { data: authors } = useFetchAuthorsQuery();
  const { data: locations } = useFetchLocationsQuery();
  const [filters, setFilters] = useState<IFilterState>({} as IFilterState);
  const dispatch = useAppDispatch();

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
      case 'Authors':
        return (
          <Select
            onChange={(value) => {
              if (typeof value === 'number') {
                setFilters((prevState) => {
                  const newState = { ...prevState, authorId: value };
                  return newState;
                });
              }
            }}
            disabled={disabled}
            data={authors || []}
            value={authors && filters.authorId ? authors[filters.authorId - 1].name : ''}
            placeholder="Select the author"
          />
        );
      case 'Locations':
        return (
          <Select
            onChange={(value) => {
              if (typeof value === 'number') {
                setFilters((prevState) => {
                  const newState = { ...prevState, locationId: value };
                  return newState;
                });
              }
            }}
            disabled={disabled}
            data={locations || []}
            value={locations && filters.locationId ? locations[filters.locationId - 1].location : ''}
            placeholder="Select the location"
          />
        );
      case 'Years':
        return (
          <div className={`${s.inputRangeWrapper} ${theme === 'light' ? s.light : s.dark}`}>
            <Input
              className={s.input}
              placeholder="From"
              disabled={disabled}
              onChangeProp={(value) => {
                if (typeof value === 'string') {
                  setFilters((prevState) => {
                    const newState = { ...prevState, from: value };
                    return newState;
                  });
                }
              }}
            />
            <MinusIcon className={s.dividerMinus} />
            <Input
              className={s.input}
              placeholder="To"
              disabled={disabled}
              onChangeProp={(value) => {
                if (typeof value === 'string') {
                  setFilters((prevState) => {
                    const newState = { ...prevState, to: value };
                    return newState;
                  });
                }
              }}
            />
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
            {['Authors', 'Locations', 'Years'].map((label, index) => (
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
            <TextButton
              onClick={() => {
                dispatch(changeFilter(filters));
                onClose();
              }}
            >
              Show the results
            </TextButton>
            <TextButton
              onClick={() => {
                dispatch(resetFilter());
                setFilters({} as IFilterState);
              }}
            >
              Clear
            </TextButton>
          </div>
        </div>
      </>
    </Drawer>
  );
}

export default Filter;
