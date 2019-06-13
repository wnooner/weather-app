import * as actionTypes from './actionTypes';
import axios from 'axios';
import { url, tag, urlFiveDay } from '../../config.js';

export const getWeatherStart = (loc) => {
    return {
        type: actionTypes.GET_WEATHER_START
    }
}

export const getWeatherEnd = (res) => {
    return {
        type: actionTypes.GET_WEATHER_END,
        res
    }
}

export const getWeatherError = (error) => {
    return {
        type: actionTypes.GET_WEATHER_ERROR,
        error: error
    }
}

export const fetchWeather = (loc) => {
    return dispatch => {
        dispatch({ type: actionTypes.GET_WEATHER_START })
        let promises = [axios.get(url + loc + tag), axios.get(urlFiveDay + loc + tag)]
        let data = []
        Promise.all(promises)
            .then((results) => {
                for (let i = 0; i < results.length; i++) {
                    data.push(results[i])
                }
                console.log(data)
                dispatch(getWeatherEnd(data))
            }).catch((e) => console.log(e))
        return
    }
}