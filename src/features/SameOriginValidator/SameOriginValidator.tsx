import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ValidTextField } from '../../shared/components';
import { FormLayout } from './components/FormLayout';
import { isSameOrigin } from './helpers/isSameOrigin';

export const REGEX_URL =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const urlFieldRules = {
  required: true,
  pattern: {
    value: REGEX_URL,
    message: 'Invalid URL'
  }
};

type FormData = {
  origin: string;
  source: string;
};

export const SameOriginValidator: FC = () => {
  const [validationResult, setValidationResult] = useState<boolean | null>(null);
  const { handleSubmit, control, formState, reset } = useForm({
    mode: 'onChange'
  });

  const onSubmit = useCallback((formData: FormData) => {
    const result = isSameOrigin(formData.source, formData.origin);
    setValidationResult(result.isValid);
  }, []);

  return (
    <>
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormLayout
          title={<Typography>Same Origin Validator</Typography>}
          origin={
            <Controller
              name="origin"
              control={control}
              rules={urlFieldRules}
              defaultValue=""
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
              defaultValue=""
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
              <Button
                type="reset"
                onClick={() => {
                  reset();
                  setValidationResult(null);
                }}>
                Reset
              </Button>
              <Button type="submit" disabled={!formState.isValid}>
                Validate
              </Button>
            </>
          }
        />
      </Box>
      {(() => {
        if (validationResult === null) {
          return null;
        }

        if (validationResult) {
          return <>these are same origin!</>;
        }

        return <>these are cross origin!</>;
      })()}
    </>
  );
};
