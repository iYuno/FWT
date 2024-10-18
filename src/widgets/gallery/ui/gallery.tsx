import { useEffect, useMemo, useState } from "react";
import { PaintingCard } from "@/entities/painting/paintingCard";
import { useFetchAuthorsQuery } from "@/shared/api/author/author";
import { useFetchLocationsQuery } from "@/shared/api/location/location";
import { useFetchPaintingsQuery } from "@/shared/api/painting/painting";
import { useAppSelector } from "@/shared/lib/store/redux";
import Pagination from "@/shared/ui/pagination/pagination";
import Skeleton from "@/shared/ui/skeleton/skeleton";
import s from "./gallery.module.scss";

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const query = useAppSelector(state => state.search.query);
  const { locationId, authorId, from, to } = useAppSelector(
    state => state.filter,
  );
  const { data, isFetching } = useFetchPaintingsQuery({
    _page: currentPage,
    _limit: 6,
    q: query,
    _gte: from as string,
    _lte: to as string,
    authorId: !!authorId ? authorId : undefined,
    locationId: !!locationId ? locationId : undefined,
  });
  const { data: authors } = useFetchAuthorsQuery();
  const { data: locations } = useFetchLocationsQuery();

  useEffect(() => {
    setCurrentPage(1);
  }, [query, locationId, authorId, from, to]);

  const renderSkeletons = useMemo(
    () => (
      <div className={s.gallery}>
        {[...new Array(6)].map(() => (
          <Skeleton className={s.cardSkeleton} />
        ))}
        <Skeleton className={s.paginationSkeleton} />
      </div>
    ),
    [],
  );

  if (!data || !data.paintings || !authors || !locations) {
    return renderSkeletons;
  }

  return (
    <div className={s.gallery}>
      {!isFetching &&
        data &&
        data.paintings &&
        authors &&
        locations &&
        data.paintings.map(painting => (
          <PaintingCard
            author={authors[painting.authorId - 1].name}
            location={locations[painting.locationId - 1].location}
            painting={painting}
          />
        ))}
      {isFetching &&
        [...new Array(6)].map(() => <Skeleton className={s.cardSkeleton} />)}
      {data.totalCountPaintings && data.totalCountPaintings > 0 && (
        <Pagination
          onChange={setCurrentPage}
          currentPage={currentPage}
          totalItems={data.totalCountPaintings}
          itemsPerPage={6}
        />
      )}
      {data.paintings.length === 0 && (
        <p className={s.noPaintings}>No paintings found</p>
      )}
    </div>
  );
}

export { Gallery };
