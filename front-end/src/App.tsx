import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import MainPage from './pages/main/MainPage';

import MyPage from './pages/user/MyPage';
import SignUpPage from './pages/user/SignUpPage';

import SunDetailPage from './pages/sun/SunDetailPage';
import SunEditPage from './pages/sun/SunEditPage';
import SunListPage from './pages/sun/SunListPage';

import MoonListPage from './pages/moon/MoonListPage';
import MoonReDetailPage from './pages/moon/MoonReDetailPage';
import MoonReEditPage from './pages/moon/MoonReEditPage';

import EarthListPage from './pages/earth/EarthListPage';

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainPage />}/>
      <Route path="/mypage" element={<MyPage />}/>
      <Route path="/signup" element={<SignUpPage />}/>
      <Route path="/sun" element={<SunListPage />}/>
      <Route path="/sun/:sunid" element={<SunDetailPage />}/>
      <Route path="/sun/edit" element={<SunEditPage />}/>
      <Route path="/moon" element={<MoonListPage />}/>
      <Route path="/moonre/:moonreid" element={<MoonReDetailPage />}/>
      <Route path="/moonre/edit" element={<MoonReEditPage />}/>
      <Route path="/earth" element={<EarthListPage />}/>
    </Routes>
  );
}

export default App;