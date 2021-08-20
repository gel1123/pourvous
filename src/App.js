import header_img from './img/透過png/クロカンショコラ.png';
import './App.css';
import { useState } from 'react';
import AppCard from './AppCard';
import GMAP from './GMAP';

// ホールケーキ
import img_hc1 from './img/ホールケーキ/いちごのロールケーキ01.jpg';
import img_hc2 from './img/ホールケーキ/ガトーショコラ01.jpg';
import img_hc3 from './img/ホールケーキ/シフォン01.jpg';
import img_hc4 from './img/ホールケーキ/タルトフレーズ01.jpg';
import img_hc5 from './img/ホールケーキ/チーズケーキ01.jpg';
import img_hc6 from './img/ホールケーキ//レアチーズ01.jpg';
import img_hc7 from './img/ホールケーキ/生デコ01.jpg';

// ケーキ＆洋菓子
import img_c01 from './img/ケーキ＆洋菓子/あんずのタルト01.jpg';
import img_c02 from './img/ケーキ＆洋菓子/ガトーショコラ01.jpg';
import img_c03 from './img/ケーキ＆洋菓子/クレームブリュレ01.jpg';
import img_c04 from './img/ケーキ＆洋菓子/クロカンショコラ01.jpg';
import img_c05 from './img/ケーキ＆洋菓子/シュークリーム01.jpg';
import img_c06 from './img/ケーキ＆洋菓子/タルトフレーズ01.jpg';
import img_c07 from './img/ケーキ＆洋菓子/チーズケーキ01.jpg';
import img_c08 from './img/ケーキ＆洋菓子/ノワール01.jpg';
import img_c09 from './img/ケーキ＆洋菓子/フルーツエクレア.jpg';
import img_c10 from './img/ケーキ＆洋菓子/フルーツタルト01.jpg';
import img_c11 from './img/ケーキ＆洋菓子/マカロン01.jpg';
import img_c12 from './img/ケーキ＆洋菓子/ムースショコラ01.jpg';
import img_c13 from './img/ケーキ＆洋菓子/レアチーズ01.jpg';

// 焼き菓子
import img_ykg1 from './img/焼き菓子/ガレット・ブルトンヌ01.jpg';
import img_ykg2 from './img/焼き菓子/クッキー01.jpg';
import img_ykg3 from './img/焼き菓子/パウンドケーキ01.jpg';
import img_ykg4 from './img/焼き菓子/マドレーヌ01.jpg';
import img_ykg5 from './img/焼き菓子/焼きドーナツ_コーヒー01.jpg';
import img_ykg6 from './img/焼き菓子/焼きドーナツ_チョコ01.jpg';
import img_ykg7 from './img/焼き菓子/焼ドーナツ_プレーン01.jpg';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const onClickHam = (e) => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="app-base">
      <header className="app-header">
        <span className="app-header-ham" onClick={onClickHam}>
          <span class="ham-button" style={
            showMenu ? {position:"absolute", left:6, opacity: 1} : {position:"absolute", left:6, opacity: 0}
          }>×</span>
          <span class="ham-button" style={
            showMenu ? {position:"absolute", left:6, opacity: 0} : {position:"absolute", left:6, opacity: 1}
          }>≡</span>
        </span>
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
        <div className="余白"></div>
        <div className="app-main">
          <div className="shopinfo-area">
            <div className="見出しエリア">
              <h2 className="見出し 下端余白なし">SHOP INFO</h2>
            </div>
            <div className="紹介文">
              <h3 className="余白なし">
                <span className="小見出し2">Pour Bour (プール・ヴー)</span>
              </h3>
              <span>沖縄県豊見城市で、フランス菓子ベースの美味しいケーキをつくっています。</span>
              <span>ご予約やお問い合わせも、下記よりお気軽にお尋ねください。</span>
            </div>
            <div className="shopinfo-body">
              <div className="address">
                <div className="左右余白">
                  <h3 className="小見出し">住所</h3>
                  <span className="左余白1文字">〒901-0243</span>
                  <span>沖縄県豊見城市</span><span>字上田543-3</span>
                  <div className="小余白"></div>
                  <GMAP/>
                </div>
              </div>
              <div className="address以外">
                <div className="左右余白">
                  <h3 className="小見出し">TEL</h3>
                  098-856-8007
                  <div className="小余白"></div>
                  <h3 className="小見出し">営業時間</h3>
                  <h4 className="小小見出し">open</h4>
                  <span>11:00〜19:30</span>
                  <span className="注釈">※日曜のみ12:00〜18:00</span>
                  <div className="小余白"></div>
                  <h4 className="小小見出し">close</h4>
                  <span>木曜日</span>
                  <span className="注釈">※祝日の場合は休まず営業</span>
                  <div className="小余白"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="見出しエリア">
            <h2 className="見出し">商品紹介</h2>
            <div className="紹介文">
              誕生日のケーキからギフトにも便利なおいしい焼き菓子まで、いろんな洋菓子を店内でつくっています。<br/>
              下記でプール・ヴー自慢の洋菓子を紹介します。<br/>
              <span className="注釈">※時期によって、実際の商品ラインナップは変わります</span>
            </div>
          </div>
          <div class="商品紹介">
            <AppCard data={{
              title: "ホールケーキ",
              nameList: [
                "いちごのロールケーキ",
                "ガトーショコラ",
                "シフォンケーキ",
                "タルトフレーズ",
                "チーズケーキ",
                "レアチーズ",
                "生デコレーションケーキ"
              ],
              imgList: [
                img_hc1, img_hc2, img_hc3, img_hc4, img_hc5, img_hc6, img_hc7
              ],
              mesList: [
                // いちごのロールケーキ
                <div>ソフトな生地に純生クリームといちごをまいて仕上げにフルーツをのせました。</div>,
                // ガトーショコラ
                <div>チョコレートをたっぷり使った焼き菓子。<br/>チョコレートのしっかりとした味が口の中でホロホロと口溶けの良いケーキです。</div>,
                // シフォンケーキ
                <div>ふんわりもっちりとした口当たりの良いシフォンケーキです。季節によって商品の味は変わります。生クリームを絡めてお召し上がりください。</div>,
                // タルトフレーズ
                <div>外は香ばしく中はしっとりと食べ応えのあるタルトにカスタードクリームと甘酸っぱいイチゴがバランス良く贅沢に楽しめる人気商品です。</div>,
                // チーズケーキ
                <div>じっくりと低温で焼き上げ、甘みをおさえたさっぱりと食べやすいチーズケーキです。</div>,
                // /レアチーズ
                <div>クリームチーズを生クリームとメレンゲを使ってふんわりとした食感に仕上げました。<br/>チーズに相性ぴったりのラズベリーが中にアクセントで組み合わさっています。</div>,
                // 生デコレーションケーキ
                <div>ふわふわのスポンジに口溶けの良い純生クリームとイチゴをサンドしてフルーツを飾りつけ。<br/>バースデーパーティーに人気の商品です。</div>
              ],
              delay: 4500
            }}/>

            <div className="余白"></div>
            <AppCard data={{
              title: "ケーキ＆洋菓子",
              nameList: [
                "あんずのタルト",
                "ガトーショコラ",
                "クレームブリュレ",
                "クロカンショコラ",
                "シュークリーム",
                "タルトフレーズ",
                "チーズケーキ",
                "ノワール",
                "フルーツエクレア",
                "フルーツタルト",
                "マカロン",
                "ムースショコラ",
                "レアチーズ"
              ],
              imgList: [
                img_c01, img_c02, img_c03, img_c04, img_c05, img_c06, img_c07, img_c08, img_c09, img_c10, img_c11, img_c12, img_c13
              ],
              mesList: [
                // あんずのタルト
                <div>シロップ漬けのあんずをタルトにのせて焼き上げた、作りはシンプルなタルトです。甘酸っぱい杏とタルトが良く合います。</div>,
                // ガトーショコラ
                <div>チョコレートをたっぷり使った焼き菓子。<br/>チョコレートのしっかりとした味が口の中でホロホロと口溶けの良いケーキです。</div>,
                // クレームブリュレ
                <div>卵黄と生クリームを使い焼き上げ、仕上げに表面に砂糖をふりかけバーナーで焦がしたお菓子です。</div>,
                // クロカンショコラ
                <div>「ふわっ」「とろっ」「さくっ」の三重奏。プール・ヴー自慢のお菓子です。フランス菓子の美味しさを表現した贅沢な魅力あふれるチョコレートケーキ</div>,
                // シュークリーム
                <div>クッキーをのせて焼いたシュー生地に天然のバニラとキルシュ風味のカスタードクリームをサンドしました。</div>,
                // タルトフレーズ
                <div>外は香ばしく中はしっとりと食べ応えのあるタルトにカスタードクリームと甘酸っぱいイチゴがバランス良く贅沢に楽しめる人気商品です。</div>,
                // チーズケーキ
                <div>じっくりと低温で焼き上げ、甘みをおさえた、さっぱりと食べやすいチーズケーキです。</div>,
                // ノワール
                <div>しっとりしたココアのスポンジにふんわり口溶けの軽いチョコクリームをサンドしたケーキです。</div>,
                // フルーツエクレア
                <div>プール・ヴー自慢のシュー生地にフルーツたっぷりカスタードクリームと一緒にサンドしました。</div>,
                // フルーツタルト
                <div>さくさくの香ばしいタルトの上に色とりどりのフルーツをのせました。</div>,
                // マカロン
                <div>卵白と砂糖・アーモンドプードル(パウダー)を混ぜて焼き上げて、外はサクッと中はしっとりしたお菓子です。<br/>季節などで種類は変わります。</div>,
                // ムースショコラ
                <div>ホワイトチョコとアーモンド風味のチョコレートの二層になっています。<br/>ほんのりコアントローの香りがする、見た目も高級感のあるチョコレートのムースです。</div>,
                // レアチーズ
                <div>クリームチーズを生クリームとメレンゲを使ってふんわりとした食感に仕上げました。チーズに相性ぴったりのラズベリーが中にアクセントで組み合わさっています。</div>
              ],
              delay: 4300
            }}/>

            <div className="余白"></div>
            <AppCard data={{
              title: "焼き菓子",
              nameList: [
                "ガレット・ブルトンヌ",
                "クッキー",
                "パウンドケーキ",
                "マドレーヌ",
                "焼きドーナツ_コーヒー",
                "焼きドーナツ_チョコ",
                "焼ドーナツ_プレーン"
              ],
              imgList: [
                img_ykg1, img_ykg2, img_ykg3, img_ykg4, img_ykg5, img_ykg6, img_ykg7
              ],
              mesList: [
                // ガレット・ブルトンヌ
                <div>サクサクとした食感とバターの風味がたっぷりの厚焼きサブレです。<br/>塩とラム酒がポイントです。</div>,
                // クッキー
                <div>プール・ヴーのクッキーはしっかり焼き上げているので香ばしく、まわりについたザラメがサクサクした食感をより一層楽しませているのが特徴です。<br/>焼き色を見て丁寧に１枚１枚オーブンから取り出すため、オーブン担当の職人は気合いを入れながら焼き上げています。プレーン、チョコチップ、チーズ、コーヒー、抹茶、ナッツの６種類。</div>,
                // パウンドケーキ
                <div>《くるみと黒糖》黒糖の生地にくるみの歯ごたえと味が良く合います。<br/>《紅茶》アールグレイをたっぷり使った風味豊かなパウンドケーキ。<br/>《フルーツ》ナッツやドライフルーツをたっぷり混ぜ込んだパウンドケーキ。</div>,
                // マドレーヌ
                <div>アーモンドの粉末と卵黄をたっぷり使い、ラム酒を混ぜ込みしっとり焼き上げました。</div>,
                // 焼きドーナツ_コーヒー
                <div>じっくり焼くことによって口溶けがよくしっとりした食感のお菓子です。<br/>詰め合わせも贈り物として人気の商品です。</div>,
                // 焼きドーナツ_チョコ
                <div>じっくり焼くことによって口溶けがよくしっとりした食感のお菓子です。<br/>詰め合わせも贈り物として人気の商品です。</div>,
                // 焼ドーナツ_プレーン
                <div>じっくり焼くことによって口溶けがよくしっとりした食感のお菓子です。<br/>詰め合わせも贈り物として人気の商品です。</div>
              ],
              delay: 4700,
              minHeight: "130px"
            }}/>
          </div>
        </div>
      </div>
    </div>
  );  
} 

export   default App;
