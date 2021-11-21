import { CssBaseline, Typography } from '@mui/material';
import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Form } from './features/FetchValidator';
import { SameOriginValidator } from './features/SameOriginValidator';

const App: FC = () => {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Typography variant="h1">Wreck it CORS!</Typography>
        <Routes>
          <Route path="/" element={<SameOriginValidator />} />
          <Route path="/fetch" element={<Form />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
