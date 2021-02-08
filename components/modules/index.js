import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveLocation } from '../../slices/configAppSlice';
import { Layout } from '../layouts/Layout';
import Head from 'next/head';
import styles from '../../styles/components/modules/Index.module.scss';
import { MasterView } from '../elements/MasterView';
import { getIPFromVisitor, getIPLocation } from '../../api/location';
import { constants } from '../../constants';
import { DetailViewDesktop } from '../elements/DetailViewDesktop';

export const Index = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.configApp.location);
  const windowSize = useSelector((state) => state.configApp.windowSize);

  useEffect(() => {
    const getLocation = async () => {
      const info = await getIPFromVisitor();
      if (info.ip) {
        const { longitude, latitude } = await getIPLocation(info.ip);
        dispatch(saveLocation({ longitude, latitude }));
      }
    };
    const now = new Date().getTime();
    if (!!location.lastFetch) {
      const minutes = now - location.lastFetch / 60;
      if (minutes > 5) getLocation();
    } else {
      getLocation();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Ubicalo | Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>
        <MasterView />
        {windowSize.device === constants.CONFIG_WINDOW_SIZE.DESKTOP && (
          <DetailViewDesktop />
        )}
      </div>
    </>
  );
};
