import { CssBaseline, ThemeProvider } from '@mui/material';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AppLayout, FooterContents, HeaderContents } from './core/components';
import { theme } from './core/theme';
import { Form } from './features/FetchValidator';
import { SameOriginValidator } from './features/SameOriginValidator';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <AppLayout
        header={<HeaderContents />}
        main={
          <Routes>
            <Route path="/" element={<SameOriginValidator />} />
            <Route path="/fetch" element={<Form />} />
          </Routes>
        }
        footer={<FooterContents />}
      />
    </ThemeProvider>
  );
};

export default App;
