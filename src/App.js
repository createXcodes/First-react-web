import "./App.css";

function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
   
    <div className="collapsenavbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <div className="features">
        <li className="nav-item">
          <a className="nav-link" href="/">Features</a>
        </li>
        </div>
        <div className="pricing">
        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>
        </div>
       
      </ul>
    </div>
  </div>
</nav>
     
    </>
  );
}

export default App;
