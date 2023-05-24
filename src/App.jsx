import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/details/:city" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
