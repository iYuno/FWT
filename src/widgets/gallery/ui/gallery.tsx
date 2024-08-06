import PaintingCard from '../../../entities/painting/paintingCard/ui/paintingCard';
import { useFetchPaintingsQuery } from '../../../shared/api/painting/painting';
import Pagination from '../../../shared/ui/pagination/pagination';
import s from './gallery.module.scss';

function Gallery() {
  const { data: paintings } = useFetchPaintingsQuery({ _page: 1, _limit: 6 });

  return (
    <div className={s.gallery}>
      {paintings?.map(() => (
        <PaintingCard />
      ))}
      <Pagination
        onChange={() => {}}
        currentPage={1}
        totalItems={54}
        itemsPerPage={6}
      />
    </div>
  );
}

export default Gallery;
