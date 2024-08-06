import s from './paintingCard.module.scss';

// interface PaintingCardProps {}

function PaintingCard() {
  return (
    <figure className={s.paintingCard}>
      <img src="https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Painting" />
      <figcaption className={s.figcaption}>
        {/* <div className={s.container}> */}
        <div className={s.previewInfo}>
          <h1 className={s.upperText}>cascate di tivoli</h1>
          <p className={s.lowerText}>1761</p>
        </div>
        <div className={s.hoveredInfo}>
          <h1 className={s.upperText}>Jean-Honore Fragonard</h1>
          <p className={s.lowerText}>Louvre Museum</p>
        </div>
        {/* </div> */}
      </figcaption>
    </figure>
  );
}

export default PaintingCard;
