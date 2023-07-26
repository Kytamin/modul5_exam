import './App.css';
import { Route, Routes } from 'react-router-dom';
import List from './component/List';
import Detail from './component/Detail';
import Add from './component/add';
import Update from './component/update';
function App() {
  return (
    <Routes>
        <Route path={"/list"} element={<List />} />
        <Route path={"/detail/:id"} element={<Detail />} />
        <Route path={"/add"} element={<Add />} />
        <Route path={"/update/:id"} element={<Update/>} />
      </Routes>
  );
}

export default App;
