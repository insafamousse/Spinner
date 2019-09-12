import React, { Component } from 'react';
import Spinner from './Spinner';

const LoadingHOC = (WrappedComponent) => {
    return class LoadingHOC extends Component {
        render(){
           return this.props.loading ? <Spinner/> : <WrappedComponent {...this.props} />
        }
    }
}

export default LoadingHOC;