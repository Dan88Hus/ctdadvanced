import Peoples from './components/people'
import Header from './components/Header'
import {Switch, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
    <Header/>
    <ToastContainer />
      <Switch>
      <Route exact path="/" component={Peoples} />

      </Switch>
    </>
  );
}

export default App;
