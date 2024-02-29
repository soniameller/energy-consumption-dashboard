import { CircularProgress, Typography, Stack } from '@mui/material';

interface LoadingParams {
  text?: string;
}

export const Loading = ({ text }: LoadingParams) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <CircularProgress size={20} />
      <Typography display="inline" variant="caption" color="text.secondary">
        {text || 'Loading...'}
      </Typography>
    </Stack>
  );
};
