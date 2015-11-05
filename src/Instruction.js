import React from 'react';

var Instruction = React.createClass({

  render: function(){

    return (
      <div className="instruction">
        <p>Describe youself in four words, phrases or short descriptions.</p>
        <button onClick={this.props.generateMemes}>Mememe</button>
      </div>
    )

  }
});

module.exports = Instruction;