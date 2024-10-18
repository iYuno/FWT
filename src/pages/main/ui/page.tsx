import { useState } from "react";
import { Gallery } from "@/widgets/gallery";
import { Header } from "@/widgets/header";
import { Filter } from "@/features/filter";
import { Search } from "@/features/search";
import { FilterIcon } from "@/shared/assets/icons";
import IconButton from "@/shared/ui/iconButton/iconButton";
import s from "./main.module.scss";

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

export { MainPage };
