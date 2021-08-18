import './AppCard.css';
import { useEffect, useState } from 'react';

function AppCard(props) {

  const d = props.data;
  const [index, setIndex] = useState(0);

  console.log("rendering");

  useEffect(() => {
    if (d.imgList) {
      const interval = setInterval(() => {
        console.log((index+1)%d.imgList.length, d.imgList[(index+1)%d.imgList.length]);
        setIndex((index+1)%d.imgList.length);
      }, 4500);
      return () => clearInterval(interval);
    }
  }, [index, d.imgList]);

  return (
  <div>
    {d.title ? <h2 className="app-card-title">{d.title}</h2> : null}
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
      <div>
        {
          d.imgList && d.imgList.map((image, i) => {
            return index === i ? 
              <div className="app-card-mes">{d.mesList[i]}</div>
              : null
          })
        }
      </div>    
    </div>
  </div>
  );
} 

export   default AppCard;
