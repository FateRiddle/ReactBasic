import React from 'react';

import List from './List'

export default class Body extends React.Component {

    
  	render(){
        const { list } = this.props;
        console.log(...list);
        let Lists = list.map((elem,index) => {
         return (<List key = {index} todo = {elem} deleteList = {this.props.deleteList}/>)
        })

	    return (
        <div>
              <button onClick = {this.props.addList}>+</button>
              <ul>
                    {Lists}
              </ul> 
        </div>
    	);
  	}
}



