import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  executeGraphQLQuery,
  getBusinessesWithLocationQuery,
  getBusinessesWithLatitudeQuery,
} from '../../api/businesses';
import { setBusinesses } from '../../slices/configAppSlice';
import { CardBusiness } from './CardBusiness';
import styles from '../../styles/components/elements/CardsContainer.module.scss';

export const CardsContainer = () => {
  const { latitude, longitude } = useSelector(
    (state) => state.configApp.location
  );
  const businesses = useSelector((state) => state.configApp.businesses);
  const dispatch = useDispatch();

  useEffect(() => {
    if (businesses.length > 0) return;
    const query = getBusinessesWithLatitudeQuery({ latitude, longitude });
    const getBusinesses = async () => {
      const { data } = await executeGraphQLQuery({ query });
      const businesses = data.search.business;
      dispatch(setBusinesses(businesses));
    };
    getBusinesses();
  }, [latitude, longitude]);

  return (
    <div className={styles['cardsContainer']}>
      {businesses.map((business, index) => (
        <CardBusiness business={business} key={index} />
      ))}
      {businesses.length < 1 && (
        <p style={{ textAlign: 'center', maxWidth: '250px' }}>
          Looks like you haven't done any search yet... 👀{' '}
        </p>
      )}
    </div>
  );
};
