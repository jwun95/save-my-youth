import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import {
  Home,
  Search,
  More,
  Mypage,
  Detail,
  UserModify,
  Like,
  Login,
  Help,
  NotFound,
  Info,
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/more/:type" element={<More />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/usermodify" element={<UserModify />} />
        <Route path="/like" element={<Like />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info" element={<Info />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate replace to="/404" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
