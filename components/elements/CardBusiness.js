import styles from '../../styles/components/elements/CardBusiness.module.scss';

export const CardBusiness = ({ business }) => {
  return (
    <div className={styles['cardWrapper']}>
      <div className={styles['card']}>
        <div className={styles['info']}>
          <div className={styles['attributes']}>
            <h4 className={styles['name']}>{business.name}</h4>
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
