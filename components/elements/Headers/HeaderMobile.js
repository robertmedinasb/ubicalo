import { useDispatch, useSelector } from 'react-redux';
import { setShowMenu, setShowFilters } from '../../../slices/configAppSlice';
import styles from '../../../styles/components/elements/headers/HeaderMobile.module.scss';
import { MobileMenu } from '../MobileMenu';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const HeaderMobile = () => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.configApp.showMenu);
  const filters = useSelector((state) => state.configApp.filters);
  const showFilters = useSelector((state) => state.configApp.showFilters);
  const router = useRouter();
  const handleShowFilters = () => {
    router.push('/#filtersSection');
    dispatch(setShowFilters(!showFilters));
  };
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
          <Link href='/'>
            <span className={styles['text']}>UBICALO</span>
          </Link>
        </div>
        <div className={styles['filter']} onClick={handleShowFilters}>
          <div className={styles['filterIcon']}>
            <img
              src={require('../../../public/icons/filter-black.png')}
              alt='filter'
            />
            <div className={styles['circle']}>{filters.length}</div>
          </div>
        </div>
      </nav>
      <div
        className={styles['menuIcon']}
        onClick={() => dispatch(setShowMenu(true))}
      >
        <img src={require('../../../public/icons/menu.svg')} alt='menu' />
      </div>
      {showMenu && <MobileMenu showMenu={showMenu} />}
    </header>
  );
};
