import React from 'react';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import List from './List';

class Layout extends React.Component {

    constructor(){
        super();
        this.state = {
            title: "绑定TXT",
            list:[2,3,5,4]
        };

    }

    changeTitle(title){
        this.setState({title});

    }

    addList(){
        const { list } = this.state;
        const x = list[list.length - 1] + 1;
        this.setState({list:list.concat(x)});
        console.log(list);  
    }

    deleteList(todo){
        const { list } = this.state;
        this.setState({list:list.filter((todos) => todos !== todo)}) 
    }
    render(){
        // setTimeout(()=> {
        //   this.setState({title: "Bob"});
        // }, 2000);
    return (
        <div>

            <Header title = {this.state.title} changeTitle = {this.changeTitle.bind(this)} />

            <Body list = {this.state.list} addList = {this.addList.bind(this)} deleteList = {this.deleteList.bind(this)}/>
            
            <Footer text = 'this is Footer' />

        </div>

    );
  }
}

export default Layout