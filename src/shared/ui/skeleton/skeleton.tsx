import s from './skeleton.module.scss';

interface SkeletonProps {
  className?: string;
}

function Skeleton({ className }: SkeletonProps) {
  return <div className={`${className} ${s.skeleton}`} />;
}

Skeleton.defaultProps = {
  className: '',
};

export default Skeleton;
