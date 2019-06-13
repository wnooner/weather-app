import React from 'react';
import './CurrentPanel.css';

const Current = ({date, temperature, summary, minTemperature, maxTemperature, currentCityName}) => {
            return <div className={`panel-current is-${summary}`} >
                <div className="panel-row">
                    <div className="panel-day">{date.format('dddd')}</div>
                    <div className="panel-day">{date.format('MMM Do')}</div>
                </div>
                <img className='panel-img' src={`/icons/${summary}.svg`} alt="weather icon"/>
                <div className="panel-row">
                    <div className="panel-temperature">{`${temperature}°`}
                        <span className="small"> {`${minTemperature}°`}</span>
                        <span className="small">/ {`${maxTemperature}°`}</span>
                    </div>
                    <div className="panel-weather">{summary}</div>
                </div>
                <div className="panel-line"></div>
                <div className="panel-row">
                    <div className="panel-city">{currentCityName}</div>  
                </div>
            </div>
}


export default Current