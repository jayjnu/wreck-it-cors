import { styled } from '@mui/material';
import { memo } from 'react';

const FooterWrapper = styled('div')({
  backgroundImage: 'url(/bricks.jpg)',
  backgroundRepeat: 'repeat',
  height: 300
});

export const FooterContents = memo(function FooterContents() {
  return <FooterWrapper></FooterWrapper>;
});
