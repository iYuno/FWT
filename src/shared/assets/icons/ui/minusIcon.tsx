import { IconProps } from "../../../api/types/iconProps";

function MinusIcon({ className }: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={className}
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7 10.7H17.4C17.6 10.7 17.7 10.6 17.9 10.5C17.9 10.3 18 10.2 18 10C18 9.80005 17.9 9.70005 17.8 9.50005C17.7 9.40005 17.5 9.30005 17.3 9.30005H10.7H9.3H2.7C2.5 9.30005 2.4 9.40005 2.2 9.50005C2.1 9.70005 2 9.80005 2 10C2 10.2 2.1 10.3 2.2 10.5C2.3 10.6 2.5 10.7 2.7 10.7H9.4H10.7Z"
      />
    </svg>
  );
}

export { MinusIcon };
