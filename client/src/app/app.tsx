import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/landing-page';
import { NotFoundPage } from './pages/not-found-page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { APP_ROUTES } from './const/app-routes';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path={APP_ROUTES.LANDING_PAGE.path}
            element={<LandingPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
