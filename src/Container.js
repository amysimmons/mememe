import Description from './Description';
import Meme from './Meme';

import React from 'react';

var Container = React.createClass({

  render: function(){
    if (!this.props.memesGenerated){
      var descriptions = [];
      for (var i = 0; i < 4; i++) {
        var description = <Description/>;
        descriptions.push(description);
      };
      return (
        <div className="container">
          {descriptions}
        </div>
      )
    }else {
      var memes = [];
      for (var i = 0; i < 4; i++) {
        var meme = <Meme/>;
        memes.push(meme);
      };
      return (
        <div className="container">
          {memes}
        </div>
      )
    }
  }
});

module.exports = Container;