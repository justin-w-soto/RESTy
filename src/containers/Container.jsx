import React from 'react';
import Header from '../components/Header';
import Controls from '../components/Controls';
import CrudHistory from '../components/CrudHistory';
import Display from '../components/Display';

class Container extends React.Component {
state = {

}


    render() { 
        return
        <>
        <Header />
        <Controls />
        <CrudHistory />
        <Display />

        </>;
    }
}
 
export default Container;
