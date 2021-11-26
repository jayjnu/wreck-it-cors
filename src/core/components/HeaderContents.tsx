import { styled } from '@mui/material';
import { memo } from 'react';
import { Logo } from './Logo';

const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(5)
}));

const Bricks = styled('div')(({ theme }) => ({
  backgroundImage: 'url(/bricks.jpg)',
  height: 40,
  marginBottom: theme.spacing(5)
}));

export const HeaderContents = memo(function HeaderContents() {
  return (
    <HeaderWrapper>
      <Bricks />
      <Logo />
    </HeaderWrapper>
  );
});
