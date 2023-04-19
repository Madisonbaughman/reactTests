import NavBar from './navbar';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Project1 from './projectPages/Project1';
import Project2 from './projectPages/Project2';
import Project3 from './projectPages/Project3';
import Project4 from './projectPages/Project4';

function App() {
  return (
    //<Router>
      <div>
        <NavBar />
        <div className="App">
          <header className="App-header">
            My App
            <Switch>
              <Route exact path="/">
                <Project1/>
              </Route>
              <Route path="/project2">
                <Project2/>
              </Route>
              <Route path="/project3">
                <Project3/>
              </Route>
              <Route path="/project4">
                <Project4/>
              </Route>
            </Switch> 
          </header>
        </div>
      </div>
   // </Router>
  );
}

export default App;
