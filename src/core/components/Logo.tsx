import { styled, Typography } from '@mui/material';
import { memo } from 'react';

const TypographyWithSize = styled(Typography)(({ theme }) => ({
  color: 'rgb(239,39,44)',
  fontFamily: 'Wreck It',
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.h2.fontSize
  }
}));

export const Logo = memo(function Logo() {
  return (
    <TypographyWithSize variant="h1" fontFamily="Wreck It">
      Wreck it CORS!
    </TypographyWithSize>
  );
});
