import { Box, Button, Typography } from '@mui/material';
import { Layout } from '../components/layout/layout';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../const/app-routes';

export const NotFoundPage = () => {
  return (
    <Layout>
      <Box textAlign="center" my={5}>
        <Typography variant="h1" component="h1" gutterBottom>
          Oops...
        </Typography>
        <Typography
          variant="h4"
          component="p"
          color="textSecondary"
          gutterBottom
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>
        <Typography variant="h1" component="p" color="primary" gutterBottom>
          404
        </Typography>
        <Button
          color="primary"
          component={Link}
          to={APP_ROUTES.LANDING_PAGE.path}
        >
          Go Home
        </Button>
      </Box>
    </Layout>
  );
};
