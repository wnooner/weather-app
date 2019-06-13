import * as actionTypes from '../actions/actionTypes';


const initialState = {
    start: false,
    error: null,
    loading: false,
    location: '',
    temp: null,
    temp_max: null,
    temp_min: null,
    summary: '',
    day2: {},
    day3: {},
    day4: {},
    day5: {},
}

export const getWeatherStart = (state, location) => {
    console.log('get weather START')
    return {
        ...state,
        loading: true,
        start: true
    }
}

export const getWeatherEnd = (state, action) => {
    console.log('get weather END')
    return {
        ...state,
        loading: false,
        temp: action.res[0].data.main.temp,
        location: action.res[0].data.name,
        temp_max: action.res[0].data.main.temp_max,
        temp_min: action.res[0].data.main.temp_min,
        summary: action.res[0].data.weather[0].main,
        day2: {
            ...state.Day2,
            temp: action.res[1].data.list[0].main.temp,
            temp_max: action.res[1].data.list[0].main.temp_max,
            temp_min: action.res[1].data.list[0].main.temp_min,
            summary: action.res[1].data.list[0].weather[0].main,
        },
        day3: {
            ...state.Day3,
            temp: action.res[1].data.list[1].main.temp,
            temp_max: action.res[1].data.list[1].main.temp_max,
            temp_min: action.res[1].data.list[1].main.temp_min,
            summary: action.res[1].data.list[1].weather[0].main,
        },
        day4: {
            ...state.Day4,
            temp: action.res[1].data.list[2].main.temp,
            temp_max: action.res[1].data.list[2].main.temp_max,
            temp_min: action.res[1].data.list[2].main.temp_min,
            summary: action.res[1].data.list[2].weather[0].main,
        },
        day5: {
            ...state.Day5,
            temp: action.res[1].data.list[3].main.temp,
            temp_max: action.res[1].data.list[3].main.temp_max,
            temp_min: action.res[1].data.list[3].main.temp_min,
            summary: action.res[1].data.list[3].weather[0].main,
        }  
    }
}

//TODO: clean this up ^^


export const getWeatherError = (state, action) => {
    console.log('get weather ERROR')
    return {
        ...state,
        error: action.error,
        loading: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_WEATHER_START: return getWeatherStart(state, action)
        case actionTypes.GET_WEATHER_END: return getWeatherEnd(state, action)
        case actionTypes.GET_WEATHER_ERROR: return getWeatherError(state, action)
        default: return state
    }
}

export default reducer;