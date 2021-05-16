import {Route} from 'react-router-dom'
import VAG from './VAG/VAG'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Route path='/visual-art-generator' component={VAG}/>
    </div>
  );
}

export default App;
