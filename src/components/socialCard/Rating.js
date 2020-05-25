import React from 'react'
import StarFull from '../../assets/shapes-and-symbols.svg'
import StarEmpty from '../../assets/shapes-and-symbols-empty.svg'
import '../../assets/css/fonts.css'

const Rating = (props) => {
    let rate = '';
    for(var i = 0; i < props.rate; i++) {
        rate += "<img src='https://i.ibb.co/7WvWdxx/star.png' style='width: 20px;height: 20px;margin: 3px' alt='Stars'/>";
    }

    for(var j = 0; j < 5 - props.rate; j++) {
        rate += "<img src='https://i.ibb.co/prH5KTr/star-1.png' style='width: 20px;height: 20px;margin: 3px' alt='Stars'/>";
    }
    return(
        <div style={ratingStyle}>
            <svg height="210" width="1200">
                <line x1="0" y1="0" x2="150" y2="0" style={lineStyle}/>
            </svg>
            <div style={starsContainerStyle} dangerouslySetInnerHTML={{__html: rate}}>
                
            </div>
            <p style={noteStyle}>{props.rate} / 5</p>
        </div>
    )
}

const lineStyle = {
    stroke: 'rgb(0,0,0)',
    strokeWidth: '4'
}

const ratingStyle = {
    width: '50%',
    margin: '15px auto',
    fontFamily: 'Akronim !important'
}

const starsContainerStyle = {
    marginTop: '-180px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '20% 20% 20% 20% 20%',
    justifyItems: 'left',
    alignItems: 'center',
} 

const starStyle = {
    width: '20px',
    height: '20px',
    margin: '3px'
}

const noteStyle = {
    textAlign: 'center',
    fontSize: '30px',
    fontWeigth: 'bold',
    marginTop: '-1px'
}

export default Rating;