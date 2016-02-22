var React = require('react');
var CommentList = require('./CommentList.jsx');
var CommentForm = require('./CommentForm.jsx');

var SampleData = [
  {id:1, author: "Rick", text:"Cool"},
  {id:2, author: "Valerie", text:"I stole Rubot, hahaha"},
  {id:3, author: "Jay", text:"Oi, give back Rubot!"}
];

//Next create the component. The function takes in an object and state. 
var CommentBox = React.createClass({
  
  getInitialState:function(){
    return {data: SampleData};
  },

  handleCommentSubmit: function(comment) {
    comment.id = Date.now();
    var newComments = this.state.data.concat([comment]);
    this.setState({ data: newComments } );
  },

  handleCommentDelete: function(id) {
    var filteredData = this.state.data.filter(function(comment){
      return comment.id !=id
    })
    this.setState({data: filteredData});
  },

  render: function(){
    return(
      <div>
      <h1> Comments </h1>
      <CommentList data={this.state.data} onCommentDelete={this.handleCommentDelete}></CommentList>
      <CommentForm onCommentSubmit={this.handleCommentSubmit}></CommentForm>

      </div>
      )
  }
}); 

module.exports = CommentBox;