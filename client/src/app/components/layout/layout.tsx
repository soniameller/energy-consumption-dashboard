import { ReactNode } from 'react';
import { Box, Toolbar, AppBar } from '@mui/material';

export interface PageWrapperProps {
  children: ReactNode;
}

export const Layout = ({ children }: PageWrapperProps) => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ height: 88, backgroundColor: '#03031C' }} />
      </AppBar>
      <Box px={5} py={5}>
        {children}
      </Box>
    </Box>
  );
};
