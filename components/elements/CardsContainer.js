import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBusinessesFromAPI } from '../../api/businesses';
import { setBusinesses } from '../../slices/configAppSlice';
import { CardBusiness } from './CardBusiness';
import styles from '../../styles/components/elements/CardsContainer.module.scss';

export const CardsContainer = () => {
  const { latitude, longitude } = useSelector(
    (state) => state.configApp.location
  );
  const searchLocation = useSelector((state) => state.configApp.searchLocation);
  const businesses = useSelector((state) => state.configApp.businesses);
  const dispatch = useDispatch();

  useEffect(() => {
    return;
    const query = `
    {
      search(longitude: ${longitude},
            latitude: ${latitude},
            limit: 10){
            total
            business{
              id
              name
              location{
                state
                city
                address1
              }
              phone
              photos
              rating
              review_count
            }
      }
    }`;
    const getBusinesses = async () => {
      const { data } = await getBusinessesFromAPI({ query });
      const businesses = data.search.business;
      dispatch(setBusinesses(businesses));
    };
    getBusinesses();
  }, [latitude, longitude]);

  useEffect(() => {
    if (searchLocation === '' || searchLocation.length < 3) return;
    const query = `
    {
      search(location: "${searchLocation}",
             limit: 10){
            total
            business{
              id
              name
              location{
                state
                city
                address1
              }
              phone
              photos
              rating
              review_count
            }
      }
    }`;
    const getBusinesses = async () => {
      const { data } = await getBusinessesFromAPI({ query });
      const businesses = data.search.business;
      dispatch(setBusinesses(businesses));
    };
    getBusinesses();
  }, [searchLocation]);

  return (
    <div className={styles['cardsContainer']}>
      {businesses.map((business, index) => (
        <CardBusiness business={business} key={index} />
      ))}
    </div>
  );
};
