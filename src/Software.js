import React from 'react';
import './styles/style.css';



function Software()  {

  return (
    <div class="software-main">

        <h1 id='software-header'> Projects I have Done</h1>

        <div class="software-content">

          <div id="proj1">
            <img id="proj1img"></img>
            <p>This is a website That is designed to assist Farmers market their products and access buyers fom their products</p>
            <p>I worked on this project using html css, javascript for front end and Php,Javascript and MySql for the backend</p>
          </div>

          <div id="proj2">
            <img id="proj2img"></img>
            <p id="proj2info"></p>
          </div>

          <div id="proj3">
            <img id="proj3img"></img>
            <p id="proj3info"></p>
          </div>

        </div>

    </div>

  );
}

export default Software;
