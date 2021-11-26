import { styled } from '@mui/material';
import { memo, ReactNode } from 'react';

const Root = styled('div')({});
const Item = styled('div')({});
const Header = styled(Item)(({ theme }) => ({
  paddingBottom: theme.spacing(3)
}));

export interface ValidatorLayoutProps {
  header: ReactNode;
  contents: ReactNode;
  footer: ReactNode;
}

export const ValidatorLayout = memo(function ValidatorLayout({
  header,
  contents,
  footer
}: ValidatorLayoutProps) {
  return (
    <Root>
      <Header>{header}</Header>
      <Item>{contents}</Item>
      <Item>{footer}</Item>
    </Root>
  );
});
