import { styled, Typography } from '@mui/material';
import { memo } from 'react';

type LogoSizeValues = 'small' | 'medium' | 'large';

const SIZE_MAP: Record<LogoSizeValues, number> = {
  small: 1,
  medium: 2,
  large: 3
};

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
