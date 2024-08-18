import { useEffect, useState } from 'react';
import PaintingCard from '../../../entities/painting/paintingCard/ui/paintingCard';
import { useFetchAuthorsQuery } from '../../../shared/api/author/author';
import { useFetchLocationsQuery } from '../../../shared/api/location/location';
import { useFetchPaintingsQuery } from '../../../shared/api/painting/painting';
import Pagination from '../../../shared/ui/pagination/pagination';
import Skeleton from '../../../shared/ui/skeleton/skeleton';
import s from './gallery.module.scss';

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data,
    refetch,
    isFetching,

  } = useFetchPaintingsQuery({ _page: currentPage, _limit: 6 });
  const { data: authors } = useFetchAuthorsQuery();
  const { data: locations } = useFetchLocationsQuery();

  function refetchPaintings() {
    refetch();
  }

  useEffect(() => {
    refetchPaintings();
  }, [currentPage]);

  if (!data || !data.paintings || !authors || !locations) {
    return (
      <div className={s.gallery}>
        {[...new Array(6)].map(() => <Skeleton className={s.cardSkeleton} />)}
        <Skeleton className={s.paginationSkeleton} />
      </div>
    );
  }

  return (
    <div className={s.gallery}>
      {!isFetching && data && data.paintings
      && authors && locations && data.paintings.map((painting) => (
        <PaintingCard
          author={authors[painting.authorId - 1].name}
          location={locations[painting.locationId - 1].location}
          painting={painting}
        />
      ))}
      {isFetching && [...new Array(6)].map(() => <Skeleton className={s.cardSkeleton} />)}
      {
        data.totalCountPaintings && data.totalCountPaintings > 0 && (
          <Pagination
            onChange={setCurrentPage}
            currentPage={currentPage}
            totalItems={data.totalCountPaintings}
            itemsPerPage={6}
          />
        )
      }
    </div>
  );
}

export default Gallery;
