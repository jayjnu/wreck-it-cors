import { Box, styled } from '@mui/material';
import { memo, ReactNode } from 'react';

type AppLayoutProps = {
  header: ReactNode;
  main: ReactNode;
  footer: ReactNode;
};

const AppRoot = styled('div')({
  textAlign: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
});

const Footer = styled('footer')({
  marginTop: 'auto'
});

export const AppLayout = memo(function AppLayout({ header, main, footer }: AppLayoutProps) {
  return (
    <AppRoot>
      <Box component="header">{header}</Box>
      <Box component="main">{main}</Box>
      <Footer>{footer}</Footer>
    </AppRoot>
  );
});
