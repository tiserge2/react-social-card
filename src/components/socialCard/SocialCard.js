import React from 'react'
import DateInfo from './DateInfo'
import PersonInfo from './PersonInfo'
import Post from './Post'
import PostStat from './PostStat'
import Rating from './Rating'
import {Lightbox} from 'react-modal-image'
import {CSSTransition} from 'react-transition-group'
import './style.css'


class SocialCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showImage: false
        }
    }

    handleImageModal = () => {
        this.setState({
            showImage: !this.state.showImage
        });
    }
    render() {
        const style = { 
            width: '300px',
            backgroundColor: this.props.theme.cardBackgroundColor,
            transition: 'background-color .75s ease-in-out',
            clipPath: 'polygon(0% 0%, 35% 0%, 45% 10%, \
                    100% 10%, 100% 100%, 0% 100%',
            color: 'white',
            border: 'none',
        } 

        const style2 = {
            filter: 'drop-shadow(1px 6px 15px rgba(0,0,0,0.5))'
        }
        return(
            <div>
            <div style={style2}>
                <div style={style}>
                    <DateInfo date={this.props.post.date}/>
                    <PersonInfo photo={this.props.post.userPhoto} 
                                name={this.props.post.name}
                                location={this.props.post.location}
                                bgcolor={this.props.theme.infoBackgoundColor}
                    />
                    <Post text={this.props.post.postText}
                          image={this.props.post.postImage}
                          imageModal={this.handleImageModal}
                          showImage={this.state.showImage}
                    />
                    <Rating rate={this.props.post.rating}/>
                    <PostStat comment={this.props.post.comment}
                              like={this.props.post.like}
                              forward={this.props.post.forward}
                              color={this.props.theme}
                    />
                </div>
            </div>
            <CSSTransition
                in={this.state.showImage}
                enter={true}
                timeout={150}
                classNames='fade'
                unmountOnExit>
                <Lightbox 
                    medium={this.props.post.postImage}
                    large={this.props.post.postImage}
                    alt={this.props.post.name}
                    onClose={this.handleImageModal}
                />
            </CSSTransition>
            </div>
        )
    }
}


export default SocialCard;