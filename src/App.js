import logo from './logo.svg';
import './App.css';
import PostForm from './components/PostForm';
import GetApi from './components/GetApi';

function App() {
  return (
    <div className="App">
      <GetApi/>
      <PostForm/>
    </div>
  );
}

export default App;
