var React = require('react');

var Comment = React.createClass({

  handleDelete: function(){
    this.props.onCommentDelete(this.props.id);
  },

  render: function(){
    return(
      <div>
      <h2> { this.props.author } </h2>
      { this.props.children }
      <button onClick={ this.handleDelete } >Delete</button>
      </div>
      )
  }
})

module.exports = Comment; 