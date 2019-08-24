import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    withRouter,
} from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import muiTheme from './theme/muiTheme';
import Search from './components/Search';
import Loader from './components/Loader';

const LazyResults = lazy(() => import('./components/Results'));

function App() {
  return (
    <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
            <ThemeProvider theme={muiTheme}>
                <Suspense fallback={<Loader/>}>
                    <Switch>
                        <Route path="/" exact component={Search} />
                        <Route path="/results" exact component={LazyResults} />
                    </Switch>
                </Suspense>
            </ThemeProvider>
        </Router>
    </div>
  );
}

export default App;
