import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from 'styles';

const Providers = (props) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
