import { useContext, useEffect } from 'react';
import './App.css';
import Blogs from './Components/Blogs';
import Header from './Components/Header';
import { AppContext } from './Components/Context/AppContext';
import Pagination from './Components/Pagination';

function App() {
  const {fetchPost} = useContext(AppContext)
  useEffect(()=>{
    fetchPost()
  },[])
  return (
    <div className="w-full h-full">
      <Header/>
      <div className='flex flex-wrap gap-5'>
        <Blogs/>
      </div>
      <Pagination/>
    </div>
  );
}

export default App;
