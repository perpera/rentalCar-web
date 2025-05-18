import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CarList from '../../components/CarList/CarList';
import Loader from '../../ui/Loader/Loader';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import Skeleton from '../../components/Skeleton/Skeleton';

import { fetchCars } from '../../redux/cars/operations.js';
import { resetCars } from '../../redux/cars/slice.js';
import { resetFilters } from '../../redux/filters/slice.js';
import { selectCars, selectCarsLoading} from '../../redux/cars/selectors.js';
import {selectFilters} from '../../redux/filters/selectors.js';

import styles from './Catalog.module.css';

export default function Catalog() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectCarsLoading);
  const filters = useSelector(selectFilters);
  const hasMore = useSelector(state => state.cars.hasMore);

  const [page, setPage] = useState(1);
  const prevFiltersRef = useRef(filters);
  const prevCarsCountRef = useRef(0);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    dispatch(resetFilters());
    dispatch(resetCars());
    setPage(1);
    prevFiltersRef.current = filters;
    dispatch(fetchCars({ page: 1 }));
  }, []);

  useEffect(() => {
    const prevFilters = prevFiltersRef.current;
    const filtersChanged = JSON.stringify(prevFilters) !== JSON.stringify(filters);

    if (filtersChanged) {
      prevFiltersRef.current = filters;
      setPage(1);
      dispatch(resetCars());
      dispatch(fetchCars({ ...filters, page: 1 }));
    }
  }, [filters, dispatch]);

  useEffect(() => {
    if (page === 1) return;
    dispatch(fetchCars({ ...filters, page }));
  }, [page, filters]);

  useEffect(() => {
    if (page === 1 || isLoading) {
      prevCarsCountRef.current = cars.length;
      return;
    }

    const prevCount = prevCarsCountRef.current;
    const newCard = document.querySelectorAll("[data-car-card]")[prevCount];

    if (newCard) {
      newCard.scrollIntoView({ behavior: 'smooth' });
      prevCarsCountRef.current = cars.length;
    }
  }, [cars]);

const handleChangePage = () => {
  setPage(p => p + 1);
};

  return (
   <> <Skeleton/>
    <section className={styles.section}>
      <FilterPanel />
      {isLoading && <Loader />}

      {!isLoading && cars.length === 0 && (
        <p className={styles.emptyMessage}>
          There are no cars matching your filters.
        </p>
      )}

      {cars.length > 0 && <CarList />}

      {cars.length > 0 && hasMore && (
        <div ref={loadMoreRef}><LoadMoreBtn onClick={handleChangePage} isLoading={isLoading}>
  Load more
</LoadMoreBtn></div>
      )}
    </section></>
  );
}
