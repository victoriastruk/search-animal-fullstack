import { Routes, Route, Link } from 'react-router';
import CreatePetPage from './pages/CreatePetPage';
import PetsListPage from './pages/PetsListPage';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pet/create">Add Pet</Link>
          </li>
          <li>
            <Link to="/pets">Pets List</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/pet/create" element={<CreatePetPage />} />
        <Route path="/pets" element={<PetsListPage />} />
      </Routes>
    </div>
  );
}

export default App;
