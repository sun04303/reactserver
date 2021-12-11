import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'antd/dist/antd.css';
import ContentWrite from "./components/ContentWrite";
import ContentListCard from "./components/ContentListCard";

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
