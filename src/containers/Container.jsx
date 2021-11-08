import React, { Component } from 'react';
import { getApi } from '../service/Fetch';
import Header from '../components/Header';
import Controls from '../components/Controls';
import CrudHistory from '../components/CrudHistory';
import Display from '../components/Display';
// import style from '../../main.css';

class Container extends Component {
state = {
    loading: false,
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
    this.setState({ loading: true });
    const display = await getApi(this.state.url, this.state.method, this.state.body)
    this.setState({ display }); 
    this.setState({ loading: false, display });
  }


    render() { 

        const { loading, display } = this.state;

        return(
            <>

        <Header />
        <Controls onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        <CrudHistory />
        { loading ? <h2>Loading...</h2> :<Display display={display}/> }

        </>
        )
        
    }
}
 
export default Container;
