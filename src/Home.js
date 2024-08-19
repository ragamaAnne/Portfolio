import React from 'react';
import './styles/style.css';
import { Link } from 'react-router-dom';


function Home() {
  return (
    
    <div className="Home">
      

      <div class="home">
        <p id='one'>Hello Welcome to My Page!!!</p>
        <p id="two">My name Is Anne Ragama an Aspiring software Engineer</p>

        <div class="container">
          <div id="development">
            <li>
            <Link to="/Software.js"  id='btn'>
              Software Development
            </Link>
            </li>
          </div>
          <div id="graphic">
          <li>
            <Link to="/Web"  id='btn'>
              Web Design
            </Link>
            </li>
          </div>
          <div id="design">
          <li>
            <Link to="/Contact"  id='btn'>
              Graphic Design
            </Link>
            </li>
          </div>
          <div id="cv">
          <li>
            <Link to="/Cv"  id='btn'>
              Resume
            </Link>
            </li>
          </div>

         </div>


      </div>

      <div class="About">
        <div id="image">
            
        </div>

   
        <div id="info">

        <h3>About me</h3>
          <p>A recent graduate from Caholic University </p>
          <p>with a degree in Comp science</p>
          <p> I enjoy coding both front end and backend mostly front-end</p>
          <p>I also game once in a while</p>
          <p>Feel Free to reach out to me for collaborations or work</p>
          <p>More Info about me is on my Resume above</p>
        </div>

      </div>

    </div>
  );
}

export default Home;
