import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment, faThumbsUp, faShare, faDownload} from '@fortawesome/free-solid-svg-icons'

const PostStat = (props) => {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);

    const faStyle = {
        width: '17px',
        height: '17px',
        color: props.color.infoBackgrounColor,
        fontWeight: 'bold',
        transition: 'color .75s ease-in-out'
    }

    const statStyle = {
        display: 'inline-block',
        // margin: '10px',
        width: '100%',
    }

    const stat1 = {
        backgroundColor: hover1 ? props.color.infoBackgoundColor : props.color.cardBackgroundColor,
        transition: 'background-color .75s ease-in-out',
        width: '100%',
        textAlign: 'center',
        cursor: 'pointer'
    }

    const stat2 = {
        backgroundColor: hover2 ? props.color.infoBackgoundColor : props.color.cardBackgroundColor,
        transition: 'background-color .75s ease-in-out',
        width: '100%',
        textAlign: 'center',
        cursor: 'pointer'
    }

    const stat3 = {
        backgroundColor: hover3 ? props.color.infoBackgoundColor : props.color.cardBackgroundColor,
        transition: 'background-color .75s ease-in-out',
        width: '100%',
        textAlign: 'center',
        cursor: 'pointer'
    }

    const stat4 = {
        backgroundColor: hover4 ? props.color.infoBackgoundColor : props.color.cardBackgroundColor,
        transition: 'background-color .75s ease-in-out',
        width: '100%',
        textAlign: 'center',
        cursor: 'pointer'
    }

    const toggleHover1 = () => {
        setHover1(!hover1);
    }

    const toggleHover2 = () => {
        setHover2(!hover2);
    }

    const toggleHover3 = () => {
        setHover3(!hover3);
    }

    const toggleHover4 = () => {
        setHover4(!hover4);
    }

    const handleLike = () => {
        console.log('liking');
    }

    return(
        <div style={PostStatStyle}>
            <div onClick={handleLike} style={statStyle, stat2} onMouseEnter={toggleHover2} onMouseLeave={toggleHover2}>
                <FontAwesomeIcon icon={faThumbsUp} style={faStyle}/>
                <p style={textStyle}>{props.like}</p>
            </div>
            <div style={statStyle, stat1} onMouseEnter={toggleHover1} onMouseLeave={toggleHover1}>
                <FontAwesomeIcon icon={faComment} style={faStyle}/>
                <p style={textStyle}>{props.comment}</p>
            </div>
            <div style={statStyle, stat3} onMouseEnter={toggleHover3} onMouseLeave={toggleHover3}>
                <FontAwesomeIcon icon={faShare} style={faStyle}/>
                <p style={textStyle}>{props.forward}</p>
            </div>
            <div style={statStyle, stat4} onMouseEnter={toggleHover4} onMouseLeave={toggleHover4}>
                <FontAwesomeIcon icon={faDownload} style={faStyle}/>
                <p style={textStyle}>0</p>
            </div>
        </div>
    )
}


const PostStatStyle = {
    // marginBottom: '-9.8px',
    // width: '100%',
    display: 'grid',
    gridTemplateColumns: '25% 25% 25% 25%',
    justifyItems: 'center',
    alignItems: 'center'
}

const ImgStyle = {
    width: '20px',
    heigth: '20px',
    display: 'inline-block',
    marginRight: '5px'
}

const textStyle = {
    display: 'inline-block',
    marginLeft: '5px'
}

export default PostStat;