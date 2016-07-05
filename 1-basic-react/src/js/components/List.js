import React from 'react';

export default class List extends React.Component {

  	render(){
  		 console.log(this.props);
	    return (
	      <li>
	      	{this.props.todo}
	      	<button onClick = {this.props.deleteList.bind(this,this.props.todo)}>Del</button>
	      </li>
	    );
  }
}

