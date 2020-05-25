import React from 'react'
import CardContainer from './CardContainer'
import './button.css'
import checkSimilarity from '../../utils/checkSimilarity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
 

class CardShower extends React.Component {
    handleSwipe = (direction) => {
        if(direction === 'left') {
            console.log('[CardShower.js] left');
            this.props.swipeChange('left');
        }

        if(direction === 'right') {
            console.log('[CardShower.js] right');
            this.props.swipeChange('right');
        }
    }
    

    render() {
        console.log("[CardShower.js]", this.props.posts);
        const cards = {
            element1 : '',
            element2 : '',
            element3 : '',
            element4 : '',
            element5 : '',
        }

        /** new logic */

        if(this.props.arrayNumberPost.length === 3) {
            //first 3
            if(checkSimilarity(this.props.arrayNumberPost, this.props.arrayNumberAllPost, 3, 'avant')) {
                console.log("First 3.................");
                cards.element1 = this.props.posts[2];
                cards.element2 = this.props.posts[1];
                cards.element3 = this.props.posts[0];
                cards.element4 = '';
                cards.element5 = '';
            }

            //last 3
            if(checkSimilarity(this.props.arrayNumberPost, this.props.arrayNumberAllPost, 3, 'arriere')) {
                console.log("Last 3.................");
                cards.element1 = '';
                cards.element2 = '';
                cards.element3 = this.props.posts[2];
                cards.element4 = this.props.posts[1];
                cards.element5 = this.props.posts[0];
            }
        }

        if(this.props.arrayNumberPost.length === 4) {
            //first 4
            if(checkSimilarity(this.props.arrayNumberPost, this.props.arrayNumberAllPost, 4, 'avant')) {
                console.log("First 4.................");
                cards.element1 = this.props.posts[3];
                cards.element2 = this.props.posts[2];
                cards.element3 = this.props.posts[1];
                cards.element4 = this.props.posts[0];
                cards.element5 = '';
            }

            //last 4
            if(checkSimilarity(this.props.arrayNumberPost, this.props.arrayNumberAllPost, 4, 'arriere')) {
                console.log("Last 4.................");
                cards.element1 = '';
                cards.element2 = this.props.posts[3]
                cards.element3 = this.props.posts[2];
                cards.element4 = this.props.posts[1];
                cards.element5 = this.props.posts[0];
            }
        }

        if(this.props.arrayNumberPost.length === 5) {
            cards.element1 = this.props.posts[4];
            cards.element2 = this.props.posts[3];
            cards.element3 = this.props.posts[2];
            cards.element4 = this.props.posts[1];
            cards.element5 = this.props.posts[0];
        }

        const buttonStyle = {
            width: '50px',
            height: '50px',
            color: this.props.theme.cardBackgroundColor,
            transition: 'color .75 ease-in-out',
            filder: 'drop-shadow(1px 6px 15px rgba(0,0,0,0.5))'
        }
        
        return(
            <div style={cardShowerStyle}>
                <div style={leftButtonGridStyle}>
                        <FontAwesomeIcon icon={faChevronLeft} 
                                         className='directionButton'
                                         onClick={this.handleSwipe.bind(this, "left")} 
                                         style={buttonStyle}/>
                </div>
                <div style={cardGridStyle}>
                    <CardContainer posts={cards} 
                                   arrayNumberPost={this.props.arrayNumberPost} 
                                   arrayNumberAllPost={this.props.arrayNumberAllPost}
                                   theme={this.props.theme}/>
                </div>
                <div style={RightButtonGridStyle}>
                        <FontAwesomeIcon icon={faChevronRight} 
                                         className='directionButton'
                                         onClick={this.handleSwipe.bind(this, "right")}
                                         style={buttonStyle}/>
                </div>
            </div>
        );
    }
}

const cardShowerStyle = {
    width: '100%',
    padding: '20px',
    display: 'grid',
    gridTemplateColumns: '10% 80% 10%',
    justifyItems: 'center',
    alignItems: 'center'
}

const leftButtonGridStyle = {
    cursor: 'pointer'
}

const cardGridStyle = {
    // width: '100%',
}

const RightButtonGridStyle = {
    cursor: 'pointer'
}



export default CardShower;