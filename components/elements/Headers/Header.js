import { useSelector } from 'react-redux';
import { constants } from '../../../constants';
import { HeaderMobile } from './HeaderMobile';
import { HeaderDesktop } from './HeaderDesktop';

export const Header = () => {
  const windowSize = useSelector((state) => state.configApp.windowSize);
  return (
    <>
      {windowSize.device === constants.CONFIG_WINDOW_SIZE.MOBILE ? (
        <HeaderMobile />
      ) : (
        <HeaderDesktop />
      )}
    </>
  );
};
