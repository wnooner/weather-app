import React from 'react';
import useInput from '../Hooks/InputHook';
import './Input.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/input'

const Input = props => {
   const { value, bind, reset } = useInput('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value){
            props.onFetchWeather(value)
            reset();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className='input-bar' type="text" {...bind} placeholder="Enter a Zip Code" />
            <input className='input-btn' type="submit" value="submit" />
        </form>
    )

}

const mapStateToProps = state => {
    return {
        location: state.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchWeather: (loc) => dispatch(actions.fetchWeather(loc)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);