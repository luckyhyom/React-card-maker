import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({FileInput,authService,cardRepository}) {

  return (
  <div className={styles.sizing}>
  <BrowserRouter>
  <Switch>
    <Route exact path={['/',' ']}>
      <Login authService={authService} />
    </Route>
    <Route exact path={'/maker'}>
      <Maker FileInput={FileInput}
              authService={authService}
              cardRepository={cardRepository}
              />
    </Route>
  </Switch>
  </BrowserRouter>
  </div>
  );
}

export default App;