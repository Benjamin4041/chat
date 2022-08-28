import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main__container">
      <div className="chat__con">
        <div className="chat__con--userprofile">
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1em",width:"88%"}}>
                <div style={{display:"flex",columnGap:"1em"}}>
                  <img className="profile__pic" src="./images/image1.png" alt="profile-pc" />
                  <span>
                    <p className="chat__con--name">Emily Dougrer</p>
                    <p className="chat__con--career">Developer</p>
                  </span>
                </div>
                <img style={{transform:"translateY(-1em)",cursor:"pointer"}} src="./images/close.svg" alt="cancel-icon" />
              </div>
            <p style={{width:"78%",fontFamily: 'Montserrat',fontStyle: "normal",fontWeight: "400",fontSize: "16px",lineHeight: "24px"}}>
              Hi there.👋We use Boards to share
              initial goals and ideas.
            </p>
        </div>
        <form action="">
          <input type="text" placeholder="Type your message..."/>
          <p style={{color:"#5856D7",cursor:"pointer",fontWeight:"600",position:"relative",bottom:"2em",transform:"translateX(19em)"}}>Send</p>
        </form>
      </div>
    </div>
  );
}

export default App;
