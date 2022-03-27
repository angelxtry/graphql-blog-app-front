import { Route, Routes } from 'react-router-dom';

import { Posts } from './pages/Posts/Posts';
import { Profile } from './pages/Profile/Profile';
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/posts' element={<Posts />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
