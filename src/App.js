import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AddCategory } from './components/AddCategoryForm';
import { CategoryCard } from './components/CategoryCard';
import { CreateForm } from './components/CreateForm';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddCategory/>}/>
        <Route path='/CreateForm' element={<CreateForm/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
