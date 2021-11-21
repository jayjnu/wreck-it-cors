import { MenuItem, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { REGEX_URL } from '../statics/regex';
import { ValidTextField } from '../../../shared/components';

interface RequestFormModel {
  origin: string;
  credentials: string;
  resource: string;
  acao: string;
}

const urlFieldRules = {
  required: true,
  pattern: {
    value: REGEX_URL,
    message: 'Invalid URL'
  }
};

export const Form: FC = () => {
  const { control, handleSubmit } = useForm<RequestFormModel>({
    mode: 'onBlur'
  });

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}>
      <Box>
        <Typography variant="h3">Request Header</Typography>
        <Box>
          <Controller
            name="origin"
            defaultValue=""
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
                  helperText={fieldState.invalid ? fieldState.error?.message : ''}
                />
              );
            }}
          />
        </Box>
        <Controller
          name="credentials"
          defaultValue="same-origin"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                label="credentials"
                select
                helperText="Access-Control-Allow-Credentials"
                {...field}>
                <MenuItem value="same-origin">same-origin</MenuItem>
                <MenuItem value="include">include</MenuItem>
              </TextField>
            );
          }}
        />
      </Box>
      <div>
        <Typography variant="h3">Response Header</Typography>
        <Controller
          name="resource"
          defaultValue=""
          control={control}
          rules={urlFieldRules}
          render={({ field, fieldState }) => {
            return (
              <ValidTextField
                label="resource"
                {...field}
                error={fieldState.invalid}
                helperText={fieldState.invalid ? fieldState.error?.message : ''}
              />
            );
          }}
        />
        <Controller
          name="acao"
          defaultValue="*"
          control={control}
          render={({ field }) => {
            return <TextField label="Access-Control-Allow-Origin" {...field}></TextField>;
          }}
        />
      </div>
    </Box>
  );
};
