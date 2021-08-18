import './AppCard.css';

function AppCard(props) {

  const d = props.data;
  return (
  <div className={"app-card " + (d.classappend ? d.classappend : "")}>
    <div>
      {d.name}
    </div>
    <div>
      {d.body}
    </div>
    <div>
      {d.footer}
    </div>
    
  </div>
  );
} 

export   default AppCard;
