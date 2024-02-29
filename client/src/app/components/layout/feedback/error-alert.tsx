import { Alert } from '@mui/material';

interface ErrorParams {
  text?: string;
}

export const ErrorAlert = ({ text }: ErrorParams) => (
  <Alert severity="error">Oops... something went wrong</Alert>
);
