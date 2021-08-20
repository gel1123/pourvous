import './GMAP.css';
import { useEffect, useState } from 'react';

function GMAP(props) {
  return (
    <div className="gmap-area">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.6430285409683!2d127.68082371445449!3d26.17575278345051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e568f791c5fac9%3A0x61af62ad41a47356!2zcG91ciB2b3Vz44OX44O844Or44O744O044O8!5e0!3m2!1sja!2sjp!4v1629410891119!5m2!1sja!2sjp"
        width="100%"
        height="100%"
        style={{
          border:0
        }}
        allowfullscreen="" loading="lazy">
      </iframe>
    </div>
  );
} 

export   default GMAP;
