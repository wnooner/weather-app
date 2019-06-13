import React from 'react';
import './WeekPanel.css';

const WeekPanel = ({temp, summary, loc, date}) => {
    return <div className={`week-panel is-${summary}`} >
        <div className='week-panel_row'>
            <div className='week-panel_day'>{date.format('dddd')}</div>
        </div>
        <img className='week-panel-img' src={`/icons/${summary}.svg`} alt="weather icon"/>
        <div className='week-panel_row'>
            <div className='week-panel_temperature'>{`${temp}°`}
            </div>
            <div className='week-panel_weather'>{summary}</div>
        </div>
        <div className='week-panel_line'></div>
        <div className='week-panel_row'>
            <div className='week-panel_city'>{loc}</div>  
        </div>
    </div>
}

export default WeekPanel