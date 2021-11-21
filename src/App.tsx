import { Typography } from '@mui/material';
import { FC } from 'react';
import './App.css';
import { Form } from './features/FetchValidator';

const App: FC = () => {
  return (
    <div className="App">
      <Typography variant="h1">Wreck it CORS!</Typography>
      <Form />
    </div>
  );
};

export default App;
