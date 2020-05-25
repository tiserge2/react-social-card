import React from 'react'
import { SwatchesPicker} from 'react-color'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFillDrip, faCogs } from '@fortawesome/free-solid-svg-icons'
import {CSSTransition} from 'react-transition-group'


class ThemeChanger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundToggle: false,
            cardToggle: false,
            otherToggle: false,
            showColorChangers: false
        }
    }

    handleBackgroundToggle = () => {
        this.setState({
            backgroundToggle: !this.state.backgroundToggle,
            cardToggle: false,
            otherToggle: false
        });
    }

    handleCardToggle = () => {
        this.setState({
            cardToggle: !this.state.cardToggle,
            backgroundToggle: false,
            otherToggle: false
        });
    }

    handleOtherToggle = () => {
        this.setState({
            otherToggle: !this.state.otherToggle,
            backgroundToggle: false,
            cardToggle: false
        });
    }

    handleCardChange = (color, event) => {
        console.log("card color name: ", color.hex);
        this.props.handleColorChange('card', color.hex);
    }

    handleBackgroundChange = (color, event) => {
        console.log("background color name: ", color.hex);
        this.props.handleColorChange('background', color.hex);
    }

    handleOtherChange = (color, event) => {
        console.log("other color name: ", color.hex);
        this.props.handleColorChange('other', color.hex);
    }

    handleshowColorChangers = () => {
        this.setState({
            showColorChangers: !this.state.showColorChangers,
            otherToggle: false,
            backgroundToggle: false,
            cardToggle: false
        });
    }

    render() {
        const style = {
            listStyleType: 'none',
            position: 'absolute',
            zIndex: '1000',
            marginTop: '-2px'
        }

        const settingIconStyle = {
            color: 'white',
            width: '20px',
            height: '20px',
        }

        const settingStyle = {
            backgroundColor: this.props.color.cardBackgroundColor,
            transition: 'background-color .75s ease-in-out'
        }

        const list = {
            display: 'inline-block',
        }
        return(
            <div>
                <div>
                    <button className='button' 
                            onClick={this.handleshowColorChangers}
                            style={settingStyle}>
                        <FontAwesomeIcon icon={faCogs} style={settingIconStyle}/>
                    </button>
                        <CSSTransition 
                            in={this.state.showColorChangers}
                            enter={true}
                            timeout={150}
                            classNames='fade'
                            unmountOnExit
                            >
                                <ul style={style}>
                                    <li style={list}>
                                        <button className='button green' onClick={this.handleBackgroundToggle}>
                                            <FontAwesomeIcon icon={faFillDrip}/> Background Color</button>
                                        <div className='color-box'>
                                            <CSSTransition
                                                in={this.state.backgroundToggle}
                                                enter={true}
                                                timeout={150}
                                                classNames='fade'
                                                unmountOnExit>
                                                <SwatchesPicker onChangeComplete={this.handleBackgroundChange}
                                                                color={this.props.color.background}  />
                                            </CSSTransition>
                                        </div>
                                    </li>
                                    <li style={list}>
                                        <button className='button red' onClick={this.handleCardToggle}>
                                            <FontAwesomeIcon icon={faFillDrip}/> Card Color</button>
                                        <div className='color-box'>
                                            <CSSTransition
                                                in={this.state.cardToggle}
                                                enter={true}
                                                timeout={150}
                                                classNames='fade'
                                                unmountOnExit>
                                                <SwatchesPicker onChangeComplete={this.handleCardChange}
                                                                color={this.props.color.cardBackgroundColor} />
                                            </CSSTransition>
                                        </div>
                                    </li>
                                    <li style={list}>
                                        <button className='button blue' onClick={this.handleOtherToggle}>
                                            <FontAwesomeIcon icon={faFillDrip}/> Other Color</button>
                                        <div className='color-box'>
                                            <CSSTransition
                                                in={this.state.otherToggle}
                                                enter={true}
                                                timeout={150}
                                                classNames='fade'
                                                unmountOnExit>
                                                <SwatchesPicker onChange={this.handleOtherChange}
                                                                color={this.props.color.infoBackgoundColor} />
                                            </CSSTransition>
                                        </div>
                                    </li>
                                </ul>
                        </CSSTransition>
                </div>
            </div>
        )
    }
}

export default ThemeChanger;