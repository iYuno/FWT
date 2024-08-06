import { useState } from 'react';
import Filter from '../../../features/filter/ui/filter';
import Search from '../../../features/search/ui/search';
import FilterIcon from '../../../shared/assets/icons/ui/filterIcon';
import IconButton from '../../../shared/ui/iconButton/iconButton';
import Gallery from '../../../widgets/gallery/ui/gallery';
import Header from '../../../widgets/header/ui/header';
import s from './main.module.scss';

function MainPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />
      <main className={s.main}>
        <div className={s.search}>
          <Search placeholder="Search by painting title" />
          <IconButton onClick={handleDrawer}>
            <FilterIcon />
          </IconButton>
        </div>
        <Gallery />
        <Filter isOpen={isOpen} onClose={handleDrawer} />
      </main>
    </>
  );
}

export default MainPage;
