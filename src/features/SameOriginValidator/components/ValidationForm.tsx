import { Box, Button, Typography } from '@mui/material';
import { memo, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ValidTextField } from '../../../shared/components';
import { FormLayout } from './FormLayout';

export const REGEX_URL =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const urlFieldRules = {
  required: true,
  pattern: {
    value: REGEX_URL,
    message: 'Invalid URL'
  }
};

export type FormData = {
  origin: string;
  source: string;
};

export interface ValidationFormProps {
  onSubmit: (data: FormData) => unknown;
  onReset: () => unknown;
}

export const ValidationForm = memo(function SameOriginValidationForm({
  onSubmit,
  onReset
}: ValidationFormProps) {
  const { handleSubmit, control, formState, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      origin: '',
      source: ''
    }
  });

  const handleReset = useCallback(() => {
    reset();
    onReset();
  }, [reset, onReset]);

  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <FormLayout
        title={<Typography>I wanna wreck it!</Typography>}
        origin={
          <Controller
            name="origin"
            control={control}
            rules={urlFieldRules}
            render={({ field, fieldState }) => {
              return (
                <ValidTextField
                  label="origin"
                  InputLabelProps={{
                    shrink: true
                  }}
                  {...field}
                  error={fieldState.invalid}
                  helperText={
                    fieldState.invalid ? fieldState.error?.message : 'http(s)://your.app.com'
                  }
                />
              );
            }}
          />
        }
        source={
          <Controller
            name="source"
            control={control}
            rules={urlFieldRules}
            render={({ field, fieldState }) => {
              return (
                <ValidTextField
                  label="source"
                  InputLabelProps={{
                    shrink: true
                  }}
                  {...field}
                  error={fieldState.invalid}
                  helperText={
                    fieldState.invalid ? fieldState.error?.message : 'http(s)://your.api.com'
                  }
                />
              );
            }}
          />
        }
        submit={
          <>
            <Button type="reset" onClick={handleReset}>
              Reset
            </Button>
            <Button type="submit" disabled={!formState.isValid}>
              Wreck it!
            </Button>
          </>
        }
      />
    </Box>
  );
});
