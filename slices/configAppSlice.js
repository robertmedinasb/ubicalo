import { createSlice } from '@reduxjs/toolkit';
import { constants } from '../constants';

const initialState = {
  windowSize: {
    width: undefined,
    height: undefined,
    device: constants.CONFIG_WINDOW_SIZE.MOBILE,
  },
  showMenu: false,
  showFilters: true,
  filters: [],
  businesses: [],
  businessSelected: null,
  location: {
    latitude: undefined,
    longitude: undefined,
    lastFetch: undefined,
  },
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
    setShowFilters(state, action) {
      state.showFilters = action.payload;
    },
    addFilter(state, action) {
      const filter = action.payload;
      const filters = state.filters.slice();
      const findIndexKey = filters.findIndex((filt) => filt.key === filter.key);
      if (findIndexKey !== -1) {
        if (filters[findIndexKey].value === filter.value) return;
        filters[findIndexKey].value = filter.value;
        return;
      }
      filters.push(filter);
      state.filters = filters;
    },
    removeFilter(state, action) {
      const filter = action.payload;
      const filters = state.filters.slice();
      const foundFilterIndex = filters.findIndex((filt) => filt === filter);
      filters.splice(foundFilterIndex, 1);
      state.filters = filters;
    },
    saveLocation(state, action) {
      const { latitude, longitude } = action.payload;
      const location = {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        lastFetch: new Date().getTime(),
      };
      state.location = location;
    },
    setBusinessSelected(state, action) {
      const businessId = action.payload.id;
      const businessesCopy = state.businesses.slice();
      const idx = businessesCopy.findIndex(
        (business) => business.id === businessId
      );
      businessesCopy[idx].seen = true;
      state.businessSelected = businessesCopy;
      state.businessSelected = action.payload;
    },
    setBusinesses(state, action) {
      const businesses = action.payload;
      state.businesses = businesses;
    },
  },
});

export const {
  setWindowSize,
  setShowMenu,
  addFilter,
  removeFilter,
  saveLocation,
  setBusinesses,
  setShowFilters,
  setBusinessSelected,
} = configAppSlice.actions;

export default configAppSlice.reducer;
