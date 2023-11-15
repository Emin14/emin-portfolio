// наблюдение за системными настройками на компьютере
const detectDarkTheme = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

export default detectDarkTheme;
