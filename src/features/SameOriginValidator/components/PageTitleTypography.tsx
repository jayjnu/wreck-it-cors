import { styled, Typography } from '@mui/material';

export const PageTitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h3.fontSize,
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.h4.fontSize
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.h5.fontSize
  }
}));
