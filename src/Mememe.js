import Instruction from './Instruction';
import Container from './Container';
import Share from './Share';

import React from 'react';

var Mememe = React.createClass({

  getInitialState (){
    var memesGenerated = false;

    return{
      memesGenerated: memesGenerated
    };
  },

  generateMemes (descriptions){
    console.log('generating meme');


    var descriptions = ["coder", "runner", "chocolate lover", "taylor swift fan"];


    var memeGenerated = true;
    this.setState({memesGenerated: memesGenerated});
  },

  render (){
    var generateMemes = this.generateMemes;
    var memesGenerated = this.state.memesGenerated;

    return (
      <div className="mememe">
        <Instruction
          generateMemes={generateMemes}/>
        <Container
          memesGenerated={memesGenerated}/>
        <Share/>
      </div>
    )
  }
});

module.exports = Mememe;