import NavBar from './navbar';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Project1 from './projectPages/Project1';
import Project2 from './projectPages/Project2';
import Project3 from './projectPages/Project3';
import Project4 from './projectPages/Project4';

function App() {
  return (
    
      <div>
        <NavBar />
        <div className="App">
          <header className="App-header">
            My App
            <Switch>
              <Route exact path="/" render={() => <Project1 />} />
              <Route path="/project2" render={() => <Project2 />} />
              <Route path="/project3" render={() => <Project3 />} />
              <Route path="/project4" render={() => <Project4 />} />

            </Switch> 
          </header>
        </div>
      </div>
   
  );
}

export default App;
