import React from 'react'

const PersonInfo = (props) => {
    const PersonStyle = { 
        backgroundColor: props.bgcolor,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '20% 80%',
        justifyItems: 'left',
        alignItems: 'center',
        paddingTop: '-20px',
        marginTop: '20px',
        transition: 'background-color .75s ease-in-out'
    }
    return(
        <div style={PersonStyle}>
            <img src={props.photo} style={ImgStyle} alt='user'/>
            <div style={infoStyle}>
                <p style={PersonNameStyle}>{props.name}</p>
                <span style={PersonProveStyle}>{props.location}</span>
            </div>
        </div>
    )
}

const ImgStyle = {
    display: 'inline-block',
    clipPath: 'circle(50%)',
    width: '50px',
    height: '50px',
    marginLeft: '10px'
}

const infoStyle = {
    display: 'inline-block',
    marginLeft: '10px'
}

const PersonNameStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
}

const PersonProveStyle = {
    fontSize: '10px',
    marginTop: '-10px',
}

export default PersonInfo;