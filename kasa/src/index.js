
import reportWebVitals from './reportWebVitals';
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Banner from './Components/Banner'
import Error from './Pages/Error';
import Footer from './Components/Footer';
import FicheLogement from './Pages/Fiche_logement'

const body = document.getElementById('root');
const root = ReactDOM.createRoot(body);

root.render(
  <React.StrictMode>
    <div className='container'>
      <Router>
        <Banner />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/FicheLogement/:id">
            <FicheLogement />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
    <Footer />
  </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
