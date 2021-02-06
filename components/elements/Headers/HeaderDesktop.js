import styles from '../../../styles/components/elements/headers/HeaderDesktop.module.scss';
export const HeaderDesktop = () => {
  return (
    <div className={styles['headerDesktopWrapper']}>
      <header className={styles['headerDesktop']}>
        <section className={styles['logo']}>
          <img src={require('../../../public/icons/location.svg')} />
          <h4>UBICALO</h4>
        </section>
        <section className={styles['searchSection']}>
          <div className={styles['search']}>
            <input type='text' placeholder='Type any business title...' />
            <img
              src={require('../../../public/icons/search.svg')}
              alt='search'
            />
            <button type='button'>Search</button>
          </div>
          <div className={styles['filter']}>
            <div className={styles['filterIcon']}>
              <img
                src={require('../../../public/icons/filter-white.png')}
                alt='filter'
              />
              <div className={styles['circle']}>2</div>
            </div>
          </div>
        </section>
        <nav className={styles['navSection']}>
          <ul className={styles['links']}>
            <li>Saved</li>
            <li>Settings</li>
            <li>
              <img src={require('../../../public/images/avatar.png')} />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
