export const constants = {
  CONFIG_WINDOW_SIZE: {
    BREAKPOINT: 900,
    MOBILE: 'Mobile',
    DESKTOP: 'Desktop',
  },
  VALUES_TO_ORDERS: {
    default: [{ key: 'Select', value: 'default' }],
    name: [
      { key: 'Select', value: 'default', disabled: true },
      { key: 'A - Z', value: 'ASC', selected: true },
      { key: 'Z - A', value: 'DESC' },
    ],
    rating: [
      { key: 'Select', value: 'default', disabled: true },
      { key: 'High Rating', value: 'DESC', selected: true },
      { key: 'Low rating', value: 'ASC' },
    ],
    review_count: [
      { key: 'Select', value: 'default', disabled: true },
      { key: 'More reviews', value: 'DESC', selected: true },
      { key: 'Less reviews', value: 'ASC' },
    ],
  },
  DAYS: {
    0: 'Monday',
    1: 'Tuesday',
    2: 'Wednesday',
    3: 'Thursday',
    4: 'Friday',
    5: 'Saturday',
    6: 'Sunday',
  },
};
