import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  return (
    <>
        <Header />
        <main className='mx-3'>
          <Outlet />
        </main>
        <Footer />
    </>

  )
}

export default App
