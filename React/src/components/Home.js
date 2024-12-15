import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <form action="/form" method="post">
        <input type="submit" value="move" />
      </form>
      <Link to="/a">move to a link</Link>
    </div>
  );
}

export default Home;