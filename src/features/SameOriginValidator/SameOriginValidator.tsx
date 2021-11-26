import { FC, useCallback, useState } from 'react';
import { PageTitleTypography } from './components/PageTitleTypography';
import { ValidationForm } from './components/ValidationForm';
import { ValidatorLayout } from './components/ValidatorLayout';
import { isSameOrigin, ValidationDTO } from './helpers/isSameOrigin';

export const SameOriginValidator: FC = () => {
  const [validationResult, setValidationResult] = useState<ValidationDTO | null>(null);

  const handleSubmit = useCallback((formData) => {
    const result = isSameOrigin(formData.origin, formData.source);

    setValidationResult(result);
  }, []);

  const handleReset = useCallback(() => {
    setValidationResult(null);
  }, []);

  return (
    <ValidatorLayout
      header={<PageTitleTypography variant="h2">Same Origin Validator</PageTitleTypography>}
      contents={<ValidationForm onSubmit={handleSubmit} onReset={handleReset} />}
      footer={validationResult === null ? null : <>{JSON.stringify(validationResult)}</>}
    />
  );
};
