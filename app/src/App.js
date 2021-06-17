import {Route} from 'react-router-dom';

import VAG from './VAG/VAG';
// import Landing from './Landing/Landing';
import NavBar from './NavBar/NavBar';
import Philosophy from './Philosophy/Philosophy';
import Splash from './Splash/Splash';

import styles from './App.module.css';

const App = (props) => {
  console.log(props)
  return (
    <div className={styles.app}>
      <Route component={NavBar} />
      <Route path='/visual-art-generator' component={VAG}/>
      <Route path='/philosophy' component={Philosophy}/>
      <Route exact path='/' component={Splash}/>
    </div>
  );
}

export default App;
