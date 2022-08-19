import './App.css';
import { Route, Routes } from "react-router-dom";
import Text from './Components/Text';
import Numbers from './Components/Numbers';
import Home from './Components/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:num" element={<Numbers/>}/>
      <Route path="/:num" element={<Text/>}/>
    </Routes>
  );
}

export default App;
