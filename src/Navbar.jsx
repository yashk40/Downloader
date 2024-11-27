import React from 'react'

export default function Navbar() {
  return (
    <>
      <div id='Navbar'>
 
   <nav className="navbar navbar-expand-lg" id='Navbar-2'>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">  <div id='img-icon-box'>  <img id='img-icon' src='https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxkO54uHQyCU2fjCyVQwJ3my3H_z__GwZ.NRa26tQgONAuTPg5Y7YegZ.qrgdQquu4I2JKff4yJsjFd8FpcLKG9g-&format=source'/> Terabox<br/> Downloader </div> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
       
        </li>
      </ul>
      <form className="nav-small" role="search">
      {/* <a id='nav-side' href='/youtube-Down'  >Youtube video downloader</a> */}
      <a id='nav-side' href='/'>Home</a>
        <a id='nav-side' href="/About"  >About</a>
        <p id='nav-side'>Terms&condition</p>
       
      </form>
    </div>
  </div>
</nav>

      </div>
    
    </>
  )
}
