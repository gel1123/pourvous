import header_img from './img/header_chocolat_2.jpg';
import './App.css';
import { useState } from 'react';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const onClickHam = (e) => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="app-base">
      <div className="app-header">
        <span className="app-header-ham" onClick={onClickHam}>≡</span>
        <span className="app-header-center">header</span>
      </div>
      <div className="app-header-dummy">
      </div>
      <div className="app-menu" style={
        showMenu ? {
          opacity: 1,
          height: "100%"
        } : {
          opacity: 0,
          height: "0%"
        }
      }>
        menu
      </div>
      <div className="app-heading">
        heading
      </div>
      <div className="app-main">
        <div className="app-card app-card-wide">
          card1
        </div>
        <div className="app-card">
          card2
        </div>
        <div className="app-card">
          card3
        </div>
        <div className="app-card">
          card4
        </div>
        <div className="app-card">
          card5
        </div>
        <div className="app-card">
          card6
        </div>
        <div className="app-card">
          card7
        </div>
        <div className="app-card">
          card8
        </div>
      </div>
    </div>
  );
}

export default App;
