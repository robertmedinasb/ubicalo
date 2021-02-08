import styles from '../../styles/components/elements/DetailViewMobile.module.scss';
import { useSelector } from 'react-redux';
import { Review } from './Review';
import { PropertiesSection } from './PropertiesSection';

export const DetailViewMobile = () => {
  const businessSelected = useSelector(
    (state) => state.configApp.businessSelected
  );

  return (
    <>
      {businessSelected && (
        <div className={styles['detailView']}>
          <section className={styles['imageSection']}>
            <img src={businessSelected.photos[0]} alt={businessSelected.name} />
          </section>
          <section className={styles['infoSection']}>
            <PropertiesSection businessSelected={businessSelected} />
            <div className={styles['property']}>
              <span>Reviews ({businessSelected.review_count})</span>
              <div className={styles['wrapperReviews']}>
                {businessSelected.reviews.map((review) => (
                  <Review review={review} />
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
