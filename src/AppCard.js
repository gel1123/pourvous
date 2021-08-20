import './AppCard.css';
import { useEffect, useState } from 'react';

function AppCard(props) {

  const d = props.data;
  const [index, setIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const 左矢印押下 = () => {
    clearInterval(intervalId);
    if (index === 0) {
      const next = d.imgList.length-1;
      console.log(next, d.imgList[next]);
      setIndex(next);
    } else {
      const next = (index-1)%d.imgList.length
      console.log(next, d.imgList[next]);
      setIndex(next);
    }
  };
  const 右矢印押下 = () => {
    clearInterval(intervalId);
    const next = (index+1)%d.imgList.length;
    console.log(next, d.imgList[next]);
    setIndex(next);
  };

  // console.log("rendering");

  useEffect(() => {
    if (d.imgList) {
      const id = setInterval(() => {
        const next = (index+1)%d.imgList.length;
        console.log(next, d.imgList[next]);
        setIndex(next);
      }, d.delay);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [index, d.imgList]);

  return (
  <div>
    {d.title ? <h3 className="app-card-title">{d.title}</h3> : null}
    <div className="app-card">
      <div>
        {
          d.nameList ? <h3 className="app-card-name">＊{d.nameList[index]}</h3> : null
        }
      </div>
      <div className="imgbox">
        {
          d.imgList && d.imgList.map((image, i) => {
            return <img
              src={image} alt={d.name + "_画像"} className="app-card-img" key={i}
              style={
                i === index ?
                  {opacity: 1}
                  : {opacity: 0}
              }
            
            />
          })
        }
      </div>
      <div className="imgbox-dummy">
        {
          d.imgList  ? 
            <img src={d.imgList[0]} alt={d.name + "_画像"} className="app-card-img-dummy" key={"dummy_"+d.imgList[0]}/>
            : null
        }
      </div>
      <div className="画像送りの矢印エリア">
        <div className="左側の矢印エリア"><div className="左矢印" onClick={左矢印押下}></div></div>
        {
          d.imgList.map((image, i) => {
            return <div 
              key={i}
              className={"索引 索引" + i + " " + d.nameList[i]}
              style={
                i === index ?
                  {backgroundColor: "rgba(255, 245, 225, 1)"}
                  : {backgroundColor: "rgba(255, 245, 225, 0.5)"}
              } 
            ></div>;
          })
        }
        <div className="右側の矢印エリア"><div className="右矢印" onClick={右矢印押下}></div></div>
      </div>
      <div className="説明" style={
        d.minHeight ? {minHeight: d.minHeight} : null
      }>
        {
          d.imgList && d.imgList.map((image, i) => {
            return index === i ? 
              <div key={i} className="app-card-mes">{d.mesList[i]}</div>
              : null
          })
        }
      </div>    
    </div>
  </div>
  );
} 

export   default AppCard;
