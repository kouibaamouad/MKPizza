import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Panier from './Pages/Panier';
import Thanks from './Pages/Thanks';
import Loading from './Components/Loading';
import { fetchData } from './ReduxTK/PizzaSlice'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch();
  const loading = useSelector(s => s.Pizza.Pending);
  useEffect(() => {
    dispatch(fetchData())
  }, [])
  return (
    <>
      {loading && <Loading />}
      <div className="App">
        <div id='Home'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Panier' element={<Panier />} />
            <Route path='/Menu' element={<Menu />} />
            <Route path='/ThankYou' element={<Thanks />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
