import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import CreateProfile from './components/CreateProfile';
import SignIn from './components/SignIn';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/signin" element={<SignIn />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
};


export default App;