import s from "./button.module.scss";

interface TextButtonProps {
  readonly children: string | number | JSX.Element;
  readonly disabled?: boolean;
  readonly className?: string;
  readonly onClick?: () => void;
  readonly isSubmit?: boolean;
}

function TextButton({
  children,
  disabled,
  className,
  onClick,
  isSubmit,
}: TextButtonProps) {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      onClick={onClick}
      className={`${disabled && s.disabled} ${s.button} ${className}`}>
      {children}
    </button>
  );
}

TextButton.defaultProps = {
  disabled: false,
  className: "",
  onClick: () => {},
  isSubmit: false,
};

export default TextButton;
