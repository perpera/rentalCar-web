import clsx from 'clsx';
import Header from '../Header/Header';
import css from './Skeleton.module.css';

export default function Skeleton({ className, width = '100%', height }) {
  return (
    <>
    <Header />
    <span className={clsx(css.skeleton, className)} style={{ width, height }}></span>
    </>
  );
}
