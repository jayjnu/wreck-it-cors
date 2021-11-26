import { styled } from '@mui/material';
import { memo } from 'react';
import { Logo } from './Logo';

const HeaderWrapper = styled('div')({
  paddingBottom: 30
});

const Bricks = styled('div')({
  backgroundImage: 'url(/bricks.jpg)',
  height: 40
});

export const HeaderContents = memo(function HeaderContents() {
  return (
    <HeaderWrapper>
      <Bricks />
      <Logo />
    </HeaderWrapper>
  );
});
