import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          display: 'none',
        },
      },
    },
  },
});
