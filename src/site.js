import React from 'react';
//import './style.css'

const Site = (props) => {
  const user = props.user;
  console.log(user);
    return <>
    <div>
  <header>
  <h1 className="name">{user.name}</h1>
  <div className="nav">
     <p><a href="index.html" className="home">Home</a>
      <a href="about.html" className="about">About</a>
      <a href="portfolio.html" className="port">Portfolio</a></p>
</div>
  </header>
</div>
  <div>
  <main>
  <h1>{user.job}</h1>
  <p>{user.mission}</p>
  <h2 className="quote">{user.quote}</h2>
  <h2 className="source">-{user.source}</h2>
  </main>
</div>
<div>
  <footer>
    <i className="material-icons md-36">
      account_balance
    </i>
    <i className="material-icons md-36">facebook</i>
  <i className="material-icons md-36">
    email
  </i>
  </footer>
</div>
  </>
}
  export default Site;