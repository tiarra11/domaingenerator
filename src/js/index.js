/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let pronoun = ["her", "our", "mine", "him"];

  let adj = ["elegant", "petite", "brave", "nice"];

  let noun = ["ankle", "body", "bat", "cap"];

  let string = "";

  for (let i = 0; i < noun.length; i++) {
    string = string + pronoun[i] + adj[i] + noun[i] + ".com </br>";
  }

  document.querySelector(".domain").innerHTML = string;
  ("Hello I'm not hungry anymore because I ate that whole place.");

  //   let part2 = pronoun[1] + adj[1] + noun[1] + ".com";
  //   console.log(part2);

  //   let part3 = pronoun[2] + adj[2] + noun[2] + ".com";
  //   console.log(part3);

  //   let part4 = pronoun[3] + adj[3] + noun[3] + ".com";
  //   console.log(part4);

  //   console.log("Hello Rigo from the console!!!!");
};
