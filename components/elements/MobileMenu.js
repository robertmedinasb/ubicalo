import { useDispatch } from 'react-redux';
import { setShowMenu } from '../../slices/configAppSlice';
import styles from '../../styles/components/elements/MobileMenu.module.scss';
import { useRouter } from 'next/router';

export const MobileMenu = ({ showMenu }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const goToHome = () => {
    dispatch(setShowMenu(false));
    router.push('/');
  };
  return (
    <>
      <nav className={styles['mobileMenu']}>
        <header className={styles['header']}>
          <div className={styles['logo']}>
            <img src={require('../../public/icons/location.svg')} />
            <h4>UBICALO</h4>
          </div>
          <div className={styles['avatar']}>
            <img src={require('../../public/images/avatar.png')} />
          </div>
        </header>
        <ul className={styles['listMenu']}>
          <li onClick={goToHome}>Home</li>
          <li onClick={goToHome}>Search</li>
          <li>Settings</li>
        </ul>
        <button className={styles['signOut']}>Sign out</button>
        <footer className={styles['footerMenu']}>
          <p className={styles['text']}>
            Made with love by <strong> Robert Medina</strong>
          </p>
          <ul className={styles['socialMedia']}>
            <a href='https://github.com/develobert15/' target='_blank'>
              <li>
                <img
                  src={require('../../public/icons/socialMedia/gitHub.png')}
                />
              </li>
            </a>
            <a href='https://www.instagram.com/robertmedinasb/' target='_blank'>
              <li>
                <img
                  src={require('../../public/icons/socialMedia/instagram.png')}
                />
              </li>
            </a>
            <a
              href='https://www.facebook.com/robert.medina.94801/'
              target='_blank'
            >
              <li>
                <img
                  src={require('../../public/icons/socialMedia/facebook.png')}
                />
              </li>
            </a>
            <a href='https://www.linkedin.com/in/' target='_blank'>
              <li>
                <img
                  src={require('../../public/icons/socialMedia/linkedIn.png')}
                />
              </li>
            </a>
          </ul>
        </footer>
      </nav>
      <div
        className={styles['mobileMenuSecond']}
        style={{ height: showMenu ? '80vh' : 0, width: showMenu ? '100%' : 0 }}
      />
      <div className={styles['closeButton']}>
        <div
          className={`${styles['closeIcon']} ${
            showMenu ? styles['showIcon'] : styles['hideIcon']
          }`}
          onClick={() => dispatch(setShowMenu(false))}
        >
          <img src={require('../../public/icons/ex.svg')} />
        </div>
      </div>
      <div className={styles['overlay']} />
    </>
  );
};
