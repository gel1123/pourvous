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
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [index, d.imgList]);

  return (
  <div className={"app-card " + (d.classappend ? d.classappend : "")}>
    <div>
      {d.name ? <h3 className="app-card-name">{d.name}</h3> : null}
    </div>
    <div className="imgbox">
      {
        d.imgList && d.imgList.map((image, i) => {
          return index === i ? 
            <img src={image} alt={d.name + "_画像"} className="app-card-img" key={i}/>
            : null
        })
      }
    </div>
    <div className="imgbox-dummy">
      {
        d.imgList  ? 
          <img src={d.imgList[0]} alt={d.name + "_画像"} className="app-card-img" key={"dummy_"+d.imgList[0]}/>
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
  );
} 

export   default AppCard;
