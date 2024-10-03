import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Post from './Post';

function App() {
  return (<BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/post?fname=manut&lname=suii">Post plot</Link></li>
        <li><Link to="/post/1">Post ID </Link></li>
        <li><Link to="post/suiii">Post string </Link></li>
      </ul>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path= "/post" element={<Post/>}/>
      <Route path= "/post/:id" element={<Post/>}/>
    </Routes>
  </BrowserRouter>);
}

export default App;
