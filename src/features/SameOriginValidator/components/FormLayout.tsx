import { Stack, styled } from '@mui/material';
import { Box } from '@mui/system';
import { memo, ReactNode } from 'react';

type FormLayoutProps = {
  title: ReactNode;
  origin: ReactNode;
  source: ReactNode;
  submit: ReactNode;
};

const TitleWrapper = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(2)
}));

export const FormLayout = memo(function FormLayout({
  title,
  origin,
  source,
  submit
}: FormLayoutProps) {
  return (
    <Box>
      <TitleWrapper>{title}</TitleWrapper>
      <Stack spacing={3}>
        <Box>{origin}</Box>
        <Box>{source}</Box>
      </Stack>
      <Box>{submit}</Box>
    </Box>
  );
});
