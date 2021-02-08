import { Header } from '../elements/Headers/Header';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setWindowSize } from '../../slices/configAppSlice';

export const Layout = ({ children }) => {
  const windowSize = useWindowSize();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setWindowSize(windowSize));
  }, [windowSize]);

  return (
    <>
      <Header />
      {children}
    </>
  );
};
