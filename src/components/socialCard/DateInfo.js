import React from 'react'
import Clock from '../../assets/wallClock.svg'

const DateInfo = (props) => {
    return (
        <div style={dateTitleStyle}>
            <div>
                <img src={Clock} style={clockStyle} alt='Clock' />
                <p style={titleStyle}> Posted on</p>
            </div> 
            <p style={dateStyle}>{props.date}</p>
        </div>
    )    
}

const clockStyle = {
    width: '14px',
    height: '14px',
    display: 'inline-block',
    marginRight: '5px',
    fontWeight: 'bold'
}

const titleStyle = {
    display: 'inline-block',
    fontSize: '15px',
    fontWeight: 'bold',
    marginTop: '-7px',
    marginRight: '15px !important'
}

const dateTitleStyle = {
    padding: '5px'
}

const dateStyle = {
    fontSize: '10px',
    fontStyle: 'italic',
    marginTop: '-10px'
}

export default DateInfo;