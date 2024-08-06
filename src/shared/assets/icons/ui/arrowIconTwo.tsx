import { IconProps } from '../../../api/types/iconProps';

function ArrowIconTwo({ className }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.31226 4.28349C6.48712 4.06977 6.80213 4.03827 7.01585 4.21313L13.6159 9.61313C13.7319 9.7081 13.7992 9.85015 13.7992 10.0001C13.7992 10.1501 13.7319 10.2921 13.6159 10.3871L7.01585 15.7871C6.80213 15.962 6.48712 15.9305 6.31226 15.7167C6.13739 15.503 6.16889 15.188 6.38261 15.0131L12.5096 10.0001L6.38261 4.98709C6.16889 4.81223 6.13739 4.49722 6.31226 4.28349Z" />
    </svg>

  );
}

export default ArrowIconTwo;
