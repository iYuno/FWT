import { BASE_URL } from "@/shared/api/base";
import s from "./paintingCard.module.scss";

interface PaintingCardProps {
  author: string;
  location: string;
  painting: {
    created: string;
    imageUrl: string;
    name: string;
  };
}

function PaintingCard({ author, location, painting }: PaintingCardProps) {
  return (
    <figure className={s.paintingCard}>
      <img
        src={BASE_URL + painting.imageUrl}
        alt={painting.name}
        className={s.image}
      />
      <figcaption className={s.figcaption}>
        <div className={s.previewInfo}>
          <h1 className={s.upperText}>{painting.name}</h1>
          <p className={s.lowerText}>{painting.created}</p>
        </div>
        <div className={s.hoveredInfo}>
          <h1 className={s.upperText}>{author}</h1>
          <p className={s.lowerText}>{location}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export { PaintingCard };
