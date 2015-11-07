import Meme from './Meme';

import React from 'react';

var Container = React.createClass({

  getInitialState (){
    return{
      descriptions: {}
    };
  },

  handleSubmit: function() {
    this.props.generateMemes(this.state.descriptions)
  },

  handleChange: function(e){
    var descriptions = this.state.descriptions;
    descriptions[e.target.name] = e.target.value;
    this.setState({
      descriptions: descriptions
    })
  },

  render: function(){
    if (!this.props.memesGenerated){
      var descriptions = [];
      for (var i = 0; i < 4; i++) {
        var description = <input onChange={this.handleChange} value={this.state.descriptions[i]} name={i.toString()}/>
        descriptions.push(description)
      };
      return (
        <div className="container">
          {descriptions}
          <button onClick={this.handleSubmit}>Mememe</button>
        </div>
      )
    }else {
      var memes = [];
      for (var i = 0; i < 4; i++) {
        var meme = <Meme/>
        memes.push(meme)
      };
      return (
        <div className="container">
          {memes}
        </div>
      )
    }
    this.setState({descriptions});
  }
});

module.exports = Container;

