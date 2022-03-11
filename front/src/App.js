import './App.css';
import ItemListContainer from "./components/ItemListContainer";
import FormContainer from "./components/FormContainer";
import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/add-product' element={<FormContainer />} />
            </Routes>
            <footer>
                Scandiweb Test assignment
            </footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
