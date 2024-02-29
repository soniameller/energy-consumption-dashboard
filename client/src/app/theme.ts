import { createTheme } from '@mui/material/styles';

const primaryColor = '#506AD4';
const primaryLight = '#818EC0';
const secondaryColor = '#F27B77';

const theme = createTheme({
  typography: {
    fontFamily: 'poppins-extralight,poppins,sans-serif',
    subtitle2: {
      color: primaryColor,
      fontSize: '0.8125rem',
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: primaryColor,
      light: primaryLight,
    },
    secondary: {
      main: secondaryColor,
    },
    action: {
      hover: primaryLight,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: primaryColor,
          color: 'white',
          textDecoration: 'lowercase',
          textTransform: 'capitalize',
          padding: '12px',
          '&:hover': {
            backgroundColor: secondaryColor,
          },
        },
      },
    },
  },
});

export default theme;
