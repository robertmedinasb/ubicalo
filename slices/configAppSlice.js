import { createSlice } from '@reduxjs/toolkit';
import { constants } from '../constants';

const initialState = {
  windowSize: {
    width: undefined,
    height: undefined,
    device: constants.CONFIG_WINDOW_SIZE.MOBILE,
  },
  showMenu: false,
};

const configAppSlice = createSlice({
  name: 'configApp',
  initialState,
  reducers: {
    setWindowSize(state, action) {
      const { width, height } = action.payload;
      state.windowSize.width = width;
      state.windowSize.height = height;
      if (width > constants.CONFIG_WINDOW_SIZE.BREAKPOINT) {
        state.windowSize.device = constants.CONFIG_WINDOW_SIZE.DESKTOP;
      } else {
        state.windowSize.device = constants.CONFIG_WINDOW_SIZE.MOBILE;
      }
    },
    setShowMenu(state, action) {
      state.showMenu = action.payload;
    },
  },
});

export const { setWindowSize, setShowMenu } = configAppSlice.actions;

export default configAppSlice.reducer;
