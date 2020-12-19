import React from "react";
import './App.css';
import imageInSrc from './imageInSrc.jpg';
import './style.css';

function App() {
  let user = {
    firstName : 'Rym',
lastName : 'Haouachi'
  }
  return (
  <>
   
<div style={{border:'solid 1px  black', maxWidth:'100vw'}}>
<h1 className="title red">{user.firstName+' '+user.lastName}</h1>
<br/>
<img src={imageInSrc} alt ="srcImage"/>
<br/>
<img src="/imageInPublic.jpg" alt="publicImage"/>
</div>
<video style={{width : "320", height : "240" }}controls>
<source src="myVideo.mp4" type="video/mp4" />
</video>
    </>
  );
}

export default App;
