import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Details from './components/Details';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/details/:city" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
