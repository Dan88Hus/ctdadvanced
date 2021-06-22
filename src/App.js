import Peoples from './components/people'
import Header from './components/Header'
import {Switch, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Planets from './components/planets'
import Films from './components/films'

function App() {
  return (
    <>
    <Header/>
    <ToastContainer />
      <Switch>
      <Route exact path="/" component={Peoples} />
      <Route exact path="/planets/:planetId" component={Planets} />
      <Route exact path="/films" component={Films} />



      </Switch>
    </>
  );
}

export default App;
