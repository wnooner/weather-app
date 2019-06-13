import React from 'react';
import './App.css';
import CurrentPanel from './components/CurrentPanel/CurrentPanel';
import moment from "moment";
import Input from './components/Input/Input';
import { connect } from 'react-redux';
import WeekPanels from './components/WeekPanels/WeekPanels';
import bigTheme from './components/Hooks/ThemeHook';

function App(props) {

  const { theme, toggleTheme } = bigTheme()

  let panel = <CurrentPanel
    date={moment()}
    icon='default'
    temperature={75}
    summary="Clear"
    maxTemperature={80}
    minTemperature={72}
    currentCityName='Hot Springs'
  />

  let panelStart = <CurrentPanel
    date={moment()}
    icon='default'
    temperature={Math.round(props.temp)}
    summary={props.summary}
    maxTemperature={Math.round(props.temp_max)}
    minTemperature={Math.round(props.temp_min)}
    currentCityName={props.loc}
  />
  return (
    <div className={`App ${theme}`}>
      <div className='input-container'>
        <Input />
        <button className='app-btn' onClick={toggleTheme}>
          Switch Theme
        </button>
      </div>
      <div className='panel-container'>
        {props.start ? panelStart : panel}
        {props.start ? <WeekPanels /> : null}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    summary: state.summary,
    loc: state.location,
    temp: state.temp,
    temp_max: state.temp_max,
    temp_min: state.temp_min,
    start: state.start
  }
}

export default connect(mapStateToProps)(App);
