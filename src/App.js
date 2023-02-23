import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import { Home } from './pages';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ width: { xl: '1440px' } }} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>

    </Box>
  );
}

export default App;
