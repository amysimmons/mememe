import Instruction from './Instruction';
import Container from './Container';
import Share from './Share';

import React from 'react';
import request from 'superagent';

var Mememe = React.createClass({

  getInitialState (){
    var memesGenerated = false;

    return{
      memesGenerated: memesGenerated
    };
  },

  generateMemes (descriptions){
    for(var key in descriptions) {
      var VALUE = descriptions[key];

      var YOUR_API_KEY = "xxx";
      var YOUR_CSE_ID = "yyy";


      var searchQuery = `https://www.googleapis.com/customsearch/v1?key=${YOUR_API_KEY}&cx=${YOUR_CSE_ID}&q=${VALUE}&searchType=image&fileType=jpg&imgSize=small&alt=json`

      request
        .get(searchQuery)
        .end((err, results) => {
          debugger
        })


      debugger
    }


    var memesGenerated = true;
    this.setState({memesGenerated: memesGenerated});
  },

  render (){
    var generateMemes = this.generateMemes;
    var memesGenerated = this.state.memesGenerated;

    return (
      <div className="mememe">
        <Instruction/>
        <Container
          memesGenerated={memesGenerated}
          generateMemes={generateMemes}/>
        <Share/>
      </div>
    )
  }
});

module.exports = Mememe;