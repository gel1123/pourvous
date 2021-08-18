import header_img from './img/透過png/クロカンショコラ.png';
import './App.css';
import { useState } from 'react';
import AppCard from './AppCard';

// 子要素に渡す画像
import img_hc1 from './img/ホールケーキ/いちごのロールケーキ01.jpg';
import img_hc2 from './img/ホールケーキ/ガトーショコラ01.jpg';
import img_hc3 from './img/ホールケーキ/シフォン01.jpg';
import img_hc4 from './img/ホールケーキ/タルトフレーズ01.jpg';
import img_hc5 from './img/ホールケーキ/チーズケーキ01.jpg';
import img_hc6 from './img/ホールケーキ//レアチーズ01.jpg';
import img_hc7 from './img/ホールケーキ/生デコ01.jpg';

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
          <AppCard data={{
            name: "商品紹介_ホールケーキ",
            imgList: [
              img_hc1, img_hc2, img_hc3, img_hc4, img_hc5, img_hc6, img_hc7
            ],
            mesList: [
              // いちごのロールケーキ
              <span>ソフトな生地に純生クリームといちごをまいて仕上げにフルーツをのせました。</span>,
              // ガトーショコラ
              <span>チョコレートをたっぷり使った焼き菓子。<br/>チョコレートのしっかりとした味が口の中でホロホロと口溶けの良いケーキです。</span>,
              // シフォン
              <span>ふんわりもっちりとした口当たりの良いシフォンケーキです。季節によって商品の味は変わります。生クリームを絡めてお召し上がりください。</span>,
              // タルトフレーズ
              <span>外は香ばしく中はしっとりと食べ応えのあるタルトにカスタードクリームと甘酸っぱいイチゴがバランス良く贅沢に楽しめる人気商品です。</span>,
              // チーズケーキ
              <span>じっくりと低温で焼き上げ、甘みをおさえたさっぱりと食べやすいチーズケーキです。</span>,
              // /レアチーズ
              <span>クリームチーズを生クリームとメレンゲを使ってふんわりとした食感に仕上げました。<br/>チーズに相性ぴったりのラズベリーが中にアクセントで組み合わさっています。</span>,
              // 生デコ
              <span>ふわふわのスポンジに口溶けの良い純生クリームとイチゴをサンドしてフルーツを飾りつけ。<br/>バースデーパーティーに人気の商品です。</span>
            ],
            classappend: "app-card-wide"
          }}/>
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
