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

const LazyResults = lazy(() => import('./components/Results'));

function App() {
  return (
    <div className="App">
        <Router>
            <ThemeProvider theme={muiTheme}>
                <Route path="/" component={Search} />
                <Suspense fallback={<p>loading...</p>}>
                    <Switch>
                        <Route path="/results" exact component={LazyResults} />
                    </Switch>
                </Suspense>
            </ThemeProvider>
        </Router>
    </div>
  );
}

export default App;
