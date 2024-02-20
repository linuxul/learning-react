import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostListPage></PostListPage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
      <Route path="/write" element={<WritePage></WritePage>}></Route>
      <Route path="/@:username">
        <Route index element={<PostListPage></PostListPage>}></Route>
        <Route path=":postId" element={<PostPage></PostPage>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
