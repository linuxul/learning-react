import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import MyPage from './pages/MyPage';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/profiles/:username" element={<Profile></Profile>}></Route>
      </Route>
      <Route path="/articles" element={<Articles></Articles>}>
        <Route path=":id" element={<Article></Article>}></Route>
      </Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/mypage" element={<MyPage></MyPage>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home></Home>}></Route>
//       <Route path="/about" element={<About></About>}></Route>
//       <Route path="/profiles/:username" element={<Profile></Profile>}></Route>
//       <Route path="/articles" element={<Articles></Articles>}>
//         <Route path=":id" element={<Article></Article>}></Route>
//       </Route>
//     </Routes>
//   );
// }

export default App;
