import React, { Component } from 'react';
import { getApi } from '../service/Fetch';
import Header from '../components/Header';
import Controls from '../components/Controls';
import CrudHistory from '../components/CrudHistory';
import Display from '../components/Display';

class Container extends Component {
state = {
    url:'',
    method:'',
    body:'',
    CrudHistory:[],
    display:'Good Morning' 

}

handleChangle = (e) => {
    this.setState({[e.target.name]: e.target.value});
}

handleSubmit = async (e) => {
    e.preventDefault();
    const display = await getApi(this.state.url);
    this.setState({ display });
  
  }


    render() { 

        const { display } = this.state;

        return(
            <>
        <Header />
        <Controls onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        <CrudHistory />
        <Display display={display}/>

        </>
        )
        
    }
}
 
export default Container;
