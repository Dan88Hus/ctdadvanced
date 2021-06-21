import Peoples from './components/people'

function App() {
  return (
    <>
    <div className="row">
      <div className="col">
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        CTD-The Star Wars API By: Huseyin Ozdogan
      <hr />
      </div>
      <div className="col mt-3">
         <Peoples/>
      </div>

      </div>

    </div>

    </>
  );
}

export default App;
