import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/components/elements/CardBusiness.module.scss';
import { setBusinessSelected } from '../../slices/configAppSlice';
import { constants } from '../../constants';
import {
  executeGraphQLQuery,
  getBusinessByIdQuery,
} from '../../api/businesses';

export const CardBusiness = ({ business }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const windowSize = useSelector((state) => state.configApp.windowSize);
  const showBusiness = async () => {
    const queryGraphQL = getBusinessByIdQuery(business.id);
    const resp = await executeGraphQLQuery({ query: queryGraphQL });
    if (!resp.data.business) return console.error({ error: resp });
    const businessSelected = resp.data.business;
    dispatch(setBusinessSelected(businessSelected));
    if (windowSize.device === constants.CONFIG_WINDOW_SIZE.MOBILE) {
      return router.push(`/business`);
    }
  };
  return (
    <div className={styles['cardWrapper']} onClick={showBusiness}>
      <div className={styles['card']}>
        <div className={styles['info']}>
          <div className={styles['attributes']}>
            <h4 className={styles['name']}>
              {business.name} {business.seen ? '👁️' : ''}
            </h4>
            <span className={styles['location']}>
              {business.location.city}, {business.location.state}
            </span>
            <div className={styles['address']}>
              <img
                className={styles['homeIcon']}
                alt='home'
                src={require('../../public/icons/home.svg')}
              />
              <span>{business.location.address1}</span>
            </div>
            <div className={styles['phone']}>
              <img
                className={styles['phoneIcon']}
                alt='phone'
                src={require('../../public/icons/phone.svg')}
              />
              <span>{business.phone}</span>
            </div>
          </div>
          <div className={styles['reviews']}>
            <div className={styles['rating']}>
              <img src={require('../../public/icons/star.svg')} alt='star' />
              <span>{parseFloat(business.rating).toFixed(1)}</span>
            </div>
            <div className={styles['reviewCount']}>
              <img src={require('../../public/icons/review.svg')} alt='star' />
              <span>{business.review_count}</span>
            </div>
          </div>
        </div>
      </div>
      {business.photos[0] && (
        <img
          className={styles['businessPhoto']}
          src={business.photos[0]}
          alt={business.name}
        />
      )}
    </div>
  );
};
