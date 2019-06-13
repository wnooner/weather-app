import React from 'react';
import './WeekPanels.css';
import { connect } from 'react-redux'
import WeekPanel from './WeekPanel'
import moment from 'moment'

const Current = (props) => {
    const data = { ...props }
    const dataArray = Object.keys(data).map(i => data[i])
    dataArray.pop()

    return <div className="week">
        {dataArray.map((e, index) => (
            <WeekPanel
            date={moment(new Date()).add(index + 1,'days')}
            key={index}
            temp={Math.round(e.temp)}
            summary={e.summary}
        />
        ))}
    </div>
}

const mapStateToProps = state => {
    return {
        day2: state.day2,
        day3: state.day3,
        day4: state.day4,
        day5: state.day5,
    }
}

export default connect(mapStateToProps)(Current)