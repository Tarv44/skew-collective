import {Route} from 'react-router-dom';

import VAG from './VAG/VAG';
import Landing from './Landing/Landing';
import NavBar from './NavBar/NavBar';
import Philosophy from './Philosophy/Philosophy';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <NavBar />
      <Route path='/visual-art-generator' component={VAG}/>
      <Route path='/philosophy' component={Philosophy}/>
      <Route exact path='/' component={Landing}/>
    </div>
  );
}

export default App;
