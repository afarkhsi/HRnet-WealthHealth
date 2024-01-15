import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import Employees from './pages/listEmployees/index.tsx';
import CreateEmployee from './pages/createEmployee/index.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import HomePage from './pages/home/index.tsx';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employee/create" element={<CreateEmployee />} />
          <Route path="/employee/list" element={<Employees />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
