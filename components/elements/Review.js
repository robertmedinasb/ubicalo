import styles from '../../styles/components/elements/Review.module.scss';

export const Review = ({ review }) => {
  const transformDate = (date) => {
    const year = date.getFullYear();

    let month = date.getMonth();
    if (month < 10) {
      month = `0${month}`;
    }
    let day = date.getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    return `${year}-${month}-${day}`;
  };
  return (
    <div className={styles['review']}>
      <div className={styles['profile']}>
        <img src={review.user.image_url} alt={review.user.name} />
        <span className={styles['date']}>
          {transformDate(new Date(review.time_created))}
        </span>
        <div className={styles['rating']}>
          <img src={require('../../public/icons/starYellow.svg')} />
          {parseFloat(review.rating).toFixed(1)}
        </div>
      </div>
      <div className={styles['text']}>
        <span className={styles['profileName']}>{review.user.name}</span>
        <p className={styles['textReview']}>{review.text}</p>
      </div>
    </div>
  );
};
