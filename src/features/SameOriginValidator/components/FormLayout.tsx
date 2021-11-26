import { Box } from '@mui/system';
import { Stack } from '@mui/material';
import { memo, ReactNode } from 'react';

type FormLayoutProps = {
  title: ReactNode;
  origin: ReactNode;
  source: ReactNode;
  submit: ReactNode;
};

export const FormLayout = memo(function FormLayout({
  title,
  origin,
  source,
  submit
}: FormLayoutProps) {
  return (
    <Box>
      <Box>{title}</Box>
      <Stack spacing={3}>
        <Box>{origin}</Box>
        <Box>{source}</Box>
      </Stack>
      <Box>{submit}</Box>
    </Box>
  );
});
