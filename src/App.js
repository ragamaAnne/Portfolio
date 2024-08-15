import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/style.css';


function App() {
  return (
    <div className="App">
      <Header />
      <div class="home">
        <p id='one'>Hello Welcome to My Page!!!</p>
        <p id="two">My name Is Anne Ragama an Aspiring software Engineer</p>

        <div class="container">
          <div id="development">
          <button id="btn">Software development</button>
          </div>
          <div id="graphic">
          <button id="btn">Web Design</button>
          </div>
          <div id="design">
          <button id="btn">Graphic design</button>
          </div>
          <div id="cv">
          <button id="btn">Resume</button>
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
      <Footer />
    </div>
  );
}

export default App;
