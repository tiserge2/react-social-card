import React from 'react'
import './card.css'
import SocialCard from '../socialCard/SocialCard'
import SocialCardMini from '../socialCard/SocialCardMini'
import EmptyCard from '../socialCard/EmptyCard'
import {CSSTransition} from 'react-transition-group'

const CardContainer = (props) => {
    return(
        <div id='cardContainer' style={cardContainerStyle}>
            <div id='box1' className='state1 box'>{props.posts.element1 !== '' ? <SocialCardMini post={props.posts.element1} theme={props.theme}/> : <EmptyCard />}</div>
            <div id='box2' className='state2 box'>{props.posts.element2 !== '' ? <SocialCardMini post={props.posts.element2} theme={props.theme}/> : <EmptyCard />}</div>
            <div id='box3' className='state3 box'>{props.posts.element3 !== '' ? <SocialCard post={props.posts.element3} theme={props.theme}/> : ''}</div>
            <div id='box4' className='state4 box'>{props.posts.element4 !== '' ? <SocialCardMini post={props.posts.element4} theme={props.theme}/> : <EmptyCard />}</div>
            <div id='box5' className='state5 box'>{props.posts.element5 !== '' ? <SocialCardMini post={props.posts.element5} theme={props.theme}/> : <EmptyCard />}</div>
        </div>
    );
}



const cardContainerStyle = {
    margin: ' auto',
    padding: 'auto'
}
export default CardContainer;