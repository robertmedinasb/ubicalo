import styles from '../../../styles/components/elements/headers/HeaderDesktop.module.scss';
export const HeaderDesktop = () => {
  return (
    <div className={styles['headerDesktopWrapper']}>
      <header className={styles['headerDesktop']}>
        <section className={styles['logo']}>
          <img src={require('../../../public/icons/location.svg')} />
          <h4>UBICALO</h4>
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
