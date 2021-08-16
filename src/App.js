import header_img from './img/header_chocolat_2.jpg';
import './App.css';

function App() {
  return (
    <div>
      <div className="bd-example">  
        <ul className="dropdown-menu">
          <li><h6 className="dropdown-header">Dropdown header</h6></li>
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
        </ul>
      </div>
      <div className="container">
        <img src={header_img} style={{width:"100%"}}/>
      </div>
    </div>
  );
}

export default App;
