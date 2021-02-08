import { useSelector } from 'react-redux';
import { constants } from '../../constants';
import styles from '../../styles/components/elements/PropertiesSection.module.scss';
import { HoursSection } from './HoursSection';

export const PropertiesSection = ({ businessSelected }) => {
  const windowSize = useSelector((state) => state.configApp.windowSize);
  return (
    <>
      <h1 className={styles['title']}>{businessSelected.name}</h1>
      {windowSize.device === constants.CONFIG_WINDOW_SIZE.MOBILE ? (
        <div className={styles['property']}>
          <span>Location</span>
          <strong>
            {businessSelected.location.city}, {businessSelected.location.state}
          </strong>
        </div>
      ) : (
        <h2 className={styles['location']}>
          {businessSelected.location.city}, {businessSelected.location.state}
        </h2>
      )}
      <div className={styles['property']}>
        <span>Contact</span>
        <strong>{businessSelected.phone}</strong>
      </div>
      <div className={styles['property']}>
        <span>Service Hours</span>
        <div className={styles['hours']}>
          {businessSelected.hours[0] ? (
            <HoursSection hours={businessSelected.hours} />
          ) : (
            <strong>It seems that we do not have this information yet😔</strong>
          )}
        </div>
      </div>
      <div className={styles['property']}>
        <span>Precio</span>
        <strong>{businessSelected.price}</strong>
      </div>
      <div className={styles['property']}>
        <span>Status</span>
        <strong>{businessSelected.is_closed ? 'Closed' : 'Open'}</strong>
      </div>
      {windowSize.device === constants.CONFIG_WINDOW_SIZE.DESKTOP && (
        <footer className={styles['footerMenu']}>
          <p className={styles['text']}>
            Made with love by <strong> Robert Medina</strong>
          </p>
          <ul className={styles['socialMedia']}>
            <a href='https://github.com/develobert15/' target='_blank'>
              <li>
                <img
                  src={require('../../public/icons/socialMedia/black/gitHub.png')}
                />
              </li>
            </a>
            <a href='https://www.instagram.com/robertmedinasb/' target='_blank'>
              <li>
                <img
                  src={require('../../public/icons/socialMedia/black/instagram.png')}
                />
              </li>
            </a>
            <a
              href='https://www.facebook.com/robert.medina.94801/'
              target='_blank'
            >
              <li>
                <img
                  src={require('../../public/icons/socialMedia/black/facebook.png')}
                />
              </li>
            </a>
            <a href='https://www.linkedin.com/in/' target='_blank'>
              <li>
                <img
                  src={require('../../public/icons/socialMedia/black/linkedIn.png')}
                />
              </li>
            </a>
          </ul>
        </footer>
      )}
    </>
  );
};
