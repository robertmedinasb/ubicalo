import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { constants } from '../../constants';
import {
  addFilter,
  removeFilter,
  searchLocation,
  setBusinesses,
} from '../../slices/configAppSlice';
import styles from '../../styles/components/elements/MasterView.module.scss';
import { CardsContainer } from './CardsContainer';

export const MasterView = () => {
  const filters = useSelector((state) => state.configApp.filters);
  const location = useSelector((state) => state.configApp.location);
  const showFilters = useSelector((state) => state.configApp.showFilters);
  const businesses = useSelector((state) => state.configApp.businesses);
  const dispatch = useDispatch();

  const [inputLocation, setInputLocation] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [orderBy, setOrderBy] = useState('default');
  const handleSubmit = () => {
    if (inputLocation && inputLocation.length > 3) {
      dispatch(addFilter({ key: 'Location', value: inputLocation }));
      return dispatch(searchLocation(inputLocation));
    }
  };

  useEffect(() => {
    if (sortBy === 'default') return;
    dispatch(addFilter({ key: 'Sort by', value: sortBy }));
  }, [sortBy]);

  useEffect(() => {
    if (orderBy === 'default') return;
    dispatch(addFilter({ key: 'Order', value: orderBy }));
    const businessesCopy = businesses.slice();
    if (orderBy === 'DESC') {
      if (sortBy === 'name')
        businessesCopy.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) return 1;
          if (nameA > nameB) return -1;
          return 0;
        });
      else
        businessesCopy.sort(
          (a, b) => parseInt(b[sortBy]) - parseInt(a[sortBy])
        );
      return dispatch(setBusinesses(businessesCopy));
    }
    if (orderBy === 'ASC') {
      if (sortBy === 'name')
        businessesCopy.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
      else
        businessesCopy.sort(
          (a, b) => parseInt(a[sortBy]) - parseInt(b[sortBy])
        );
      return dispatch(setBusinesses(businessesCopy));
    }
  }, [orderBy]);

  return (
    <section className={styles['masterView']}>
      <div id='filtersSection'>
        <div className={styles['filters']}>
          {filters.map((filter, index) => (
            <div key={index} className={styles['filter']}>
              <span className={styles['words']}>
                {filter.key}: {filter.value}
              </span>
              <img
                className={styles['deleteIcon']}
                src={require('../../public/icons/exBlack.svg')}
                alt='X'
                onClick={() => dispatch(removeFilter(filter))}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles['search']}>
        <div className={styles['searchWrapper']}>
          <input
            type='text'
            onChange={(e) => setInputLocation(e.target.value)}
            placeholder='Type any location here...'
            className={styles['searchInput']}
          />
          <img
            className={styles['searchIcon']}
            src={require('../../public/icons/search.svg')}
          />
        </div>
        <button className={styles['searchButton']} onClick={handleSubmit}>
          Search
        </button>
      </div>
      {showFilters && businesses.length > 0 && (
        <div className={styles['filterSection']}>
          <div className={styles['field-sort']}>
            <label>Sort by:</label>
            <select
              defaultValue={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value='default' disabled>
                Select
              </option>
              <option value='name'>Name</option>
              <option value='rating'>Rating</option>
              <option value='review_count'>Reviews</option>
            </select>
          </div>
          <div className={styles['field-order']}>
            <label>Order:</label>
            <select
              defaultValue={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
            >
              {constants.VALUES_TO_ORDERS[sortBy].map(
                ({ key, value, selected, disabled }, index) => (
                  <option value={value} key={index} disabled={disabled}>
                    {key}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
      )}
      {location.lastFetch && <CardsContainer />}
    </section>
  );
};
