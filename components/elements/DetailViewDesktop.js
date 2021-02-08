import styles from '../../styles/components/elements/DetailViewDesktop.module.scss';
import { useSelector } from 'react-redux';
import { Review } from './Review';
import { PropertiesSection } from './PropertiesSection';

export const DetailViewDesktop = () => {
  const businessSelected = useSelector(
    (state) => state.configApp.businessSelected
  );

  return (
    <>
      {businessSelected && (
        <div className={styles['detailView']}>
          <section className={styles['imageSection']}>
            <section className={styles['photo']}>
              <img
                src={businessSelected.photos[0]}
                alt={businessSelected.name}
              />
            </section>
            <section className={styles['statsSection']}>
              <div className={styles['star']}>
                <img
                  src={require('../../public/icons/starBlack.svg')}
                  alt='star'
                />
                <span>{parseFloat(businessSelected.rating).toFixed(2)}</span>
              </div>
              <div className={styles['review']}>
                <img
                  src={require('../../public/icons/reviewBlack.svg')}
                  alt='star'
                />
                <span>{businessSelected.review_count}</span>
              </div>
            </section>
            <section className={styles['reviewsSection']}>
              <div>
                <span className={styles['reviewTitle']}>Reviews</span>
                <div className={styles['wrapperReviews']}>
                  {businessSelected.reviews.map((review) => (
                    <Review review={review} />
                  ))}
                </div>
              </div>
            </section>
          </section>
          <section className={styles['infoSection']}>
            <PropertiesSection businessSelected={businessSelected} />
          </section>
        </div>
      )}
      {!businessSelected && (
        <p
          style={{
            textAlign: 'center',
            maxWidth: '300px',
            margin: '20%',
            fontSize: '30px',
          }}
        >
          This should show any selected business ... when you select it 🕵️
        </p>
      )}
    </>
  );
};
