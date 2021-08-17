import header_img from './img/header_chocolat_2.jpg';
import './App.css';
import { useState } from 'react';
import AppCard from './AppCard';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const onClickHam = (e) => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="app-base">
      <header className="app-header">
        <span className="app-header-ham" onClick={onClickHam}>≡</span>
        <span className="app-header-center">header</span>
      </header>
      <div className="app-header-dummy">
      </div>
      <div className="app-menu" style={
        showMenu ? {
          height: "calc(100% - 60px)"
        } : {
          height: "0%"
        }
      }>
        <nav>
          <ul>
            <li>
              <div className="nav-title">商品紹介</div>
              <hr className="nav-title-bar"/>
              <div className="nav-item">
                <div className="nav-item-card">
                  card1
                </div>
                <div className="nav-item-card">
                  card2
                </div>
                <div className="nav-item-card">
                  card3
                </div>
                <div className="nav-item-card">
                  card4
                </div>
              </div>
            </li>
            <li>
              <div className="nav-title">オススメ商品</div>
              <hr className="nav-title-bar"/>
              <div className="nav-item">
                <div className="nav-item-card">
                  card1
                </div>
                <div className="nav-item-card">
                  card2
                </div>
                <div className="nav-item-card">
                  card3
                </div>
                <div className="nav-item-card">
                  card4
                </div>
              </div>
            </li>
            <li>
              <div className="nav-title">ギフト</div>
              <hr className="nav-title-bar"/>
              <div className="nav-item">
                <div className="nav-item-card">
                  card1
                </div>
                <div className="nav-item-card">
                  card2
                </div>
              </div>
            </li>
            <li>
              <div className="nav-title">アクセス</div>
              <hr className="nav-title-bar"/>
              <div className="nav-item">
                <div className="nav-item-card">
                  card1
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="app-body">
        <div className="app-heading">
          <img src={header_img} alt="トップ画像"/>
        </div>
        <div className="app-main">
          <AppCard data={{name: "card1", classappend: "app-card-wide"}}/>
          <AppCard data={{name: "card2"}}/>
          <AppCard data={{name: "card3"}}/>
          <AppCard data={{name: "card4"}}/>
          <AppCard data={{name: "card5"}}/>
        </div>
      </div>
    </div>
  );  
} 

export   default App;
