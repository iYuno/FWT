import { useState } from "react";
import { BASE_URL } from "@/shared/api/base";
import { DangerIcon } from "@/shared/assets/icons/ui/dangerIcon";
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
  const [isError, setIsError] = useState(false);

  const handleImageError = () => {
    setIsError(true);
  };

  return (
    <figure className={s.paintingCard}>
      {!isError ? (
        <img
          src={BASE_URL + painting.imageUrl}
          alt={painting.name}
          className={s.image}
          onErrorCapture={handleImageError}
        />
      ) : (
        <span className={s.fallback}>
          <DangerIcon />
          <p> Image was not loaded </p>
        </span>
      )}
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
