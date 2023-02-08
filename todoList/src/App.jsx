import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import GlobalStyle from './components/styled/global.styled';
import initialData from './assets/data.js';
import useWeather from './hooks/useWeather';
import { useState } from 'react';

const theme = {};

function App() {
  const [data, setData] = useState(initialData);
  const weather = useWeather();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Main setData={setData} weather={weather} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
