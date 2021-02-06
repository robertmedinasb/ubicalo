import { useDispatch, useSelector } from 'react-redux';
import { setShowMenu } from '../../../slices/configAppSlice';
import styles from '../../../styles/components/elements/headers/HeaderMobile.module.scss';
import { MobileMenu } from '../MobileMenu';

export const HeaderMobile = () => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.configApp.showMenu);
  return (
    <header className={styles['headerMobile']}>
      <nav className={styles['headerNav']}>
        <div className={styles['stateInformation']}>
          <div className={styles['locationIcon']}>
            <img
              src={require('../../../public/icons/location.svg')}
              alt='location'
            />
          </div>
          <span className={styles['text']}>California, USA</span>
        </div>
        <div className={styles['filter']}>
          <div className={styles['filterIcon']}>
            <img
              src={require('../../../public/icons/filter-black.png')}
              alt='filter'
            />
            <div className={styles['circle']}>2</div>
          </div>
        </div>
      </nav>
      <div
        className={styles['menuIcon']}
        onClick={() => dispatch(setShowMenu(true))}
      >
        <img src={require('../../../public/icons/menu.svg')} alt='menu' />
      </div>
      <MobileMenu showMenu={showMenu} />
    </header>
  );
};
