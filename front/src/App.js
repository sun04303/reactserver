import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'antd/dist/antd.css'
import ContentListCard from './components/ContentListCard';
import ContentWrite from './components/ContentWrite';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContentListCard />} />
        <Route path="/write" element={<ContentWrite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
