import header_img from './img/透過png/クロカンショコラ.png';
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
        <span className="app-header-center">「チョコレートケーキが得意」な洋菓子屋さん<br/>pour vous（プール・ヴー）</span>
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
        <div className="app-title">
          <h2>
            {/* <span className="catchcopy">
              <span>「チョコレートケーキが得意」な</span><span>洋菓子屋さん</span>
            </span><br/>
            <span className="shopname">
              <span>pour vous</span><span>（プール・ヴー）</span>
            </span> */}
            <span className="shopname-before">PÂTISSERIE</span><br/>
            <div className="shopname-body">
              <span className="shopname">Pour Vous</span>
              <span className="shopname-after">TOMIGUSUKU</span>
            </div>
          </h2>
        </div>
        <hr className="app-title-bar"/>
        <div className="app-heading">
          <div className="app-heading-message">
            <p>
              <span>おいしいケーキを作りたい、</span><br/>
              <span>思わず笑顔がこぼれるケーキをお届けしたい。</span>
            </p>
            <p>
              <span>そんな思いでメンバー一同</span><br/>
              <span>Happyな気持ちでケーキ作りをしています。</span>
            </p>
            <p>
              <span>地元に愛されるケーキ屋さんとして</span><br/>
              <span>豊見城で今日もみなさまに</span><br/>
              <span>美味しいケーキをおとどけします</span>
            </p>
          </div>
          <div className="app-heading-message-dummy"></div>
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
