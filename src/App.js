import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import News from './Components/News/News';
import Header from './Components/Header/Header';
import Headline from './Components/Headline/Headline';
import  Fragment  from './Components/Fragment/Fragment';
// import TopHeadlines from './Components/TopHeadlines/TopHeadlines';

function App() {
  return (
    <div className="App">
      <h1>This is Breaking News</h1>
      <Button variant="primary">Primary</Button>
      <Fragment></Fragment>
      <Header></Header>
      <Headline></Headline>

    </div>
  );
}

export default App;
