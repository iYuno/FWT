import s from './iconButton.module.scss';

interface IconButtonProps {
  readonly children: JSX.Element;
  readonly className?: string;
  readonly onClick?: () => void;
}

function IconButton({
  children, className, onClick,
}: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${s.button} ${className}`}
    >
      {children}
    </button>
  );
}

IconButton.defaultProps = {
  className: '',
  onClick: () => {},
};

export default IconButton;
