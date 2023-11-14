import { Route,  Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import Layout from './Layout';
import Homepage from './pages/homepage/Homepage';
import CreatePage from './pages/createpage/CreatePage';
import Profile from './pages/profile/Profile';
import SinglePost from './pages/singlepost/SinglePost';
import PostsPage from './pages/postspage/PostsPage';





function App() {
  return (
    
    <Routes>
    <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/posts" element={<PostsPage />} />
        </Route>
    </Routes>
      
       
        
    
  );
}

export default App;
