import React from 'react'
import { Link } from 'react-router-dom';

function Error404() {
    //1.state/Hook variable

    //2. function state

    //3. Return statement
  return (
        <>
    
  <div style={{backgroundColor: '#2874f0', height: 78, textAlign: 'center'}}>
    <div style={{width: '100%', margin: '0 auto', paddingTop: 2, textAlign: 'left'}}>
      <div style={{marginTop: 15, textAlign: 'center'}}>
        <h1>Page Not Found</h1>
        {/* <img width={149} src="http://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fk-logo_9fddff.png" style={{border: 'none'}} /> */}
      </div>
    </div>
  </div>
  <div style={{textAlign: 'center', fontSize: 14, padding: 20}}>
    <div>
        <Link to="/"></Link>
      {/* <img style={{width: 450, maxWidth: '100%'}} src="" id="IMG_3" alt="true" /> */}
      <div style={{fontSize: '1.3em', paddingTop: 10, marginBottom: 35}}>Unfortunately the page you are looking
        for has been moved or deleted</div>
      <a href="/" className="button">GO TO HOMEPAGE</a>
    </div>
  </div>


        </>

  );
}

export default Error404