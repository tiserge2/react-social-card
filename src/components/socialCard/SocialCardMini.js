import React from 'react'
import BackdropFilter from "react-backdrop-filter"
import DateInfo from './DateInfo'
import PersonInfo from './PersonInfo'
import Post from './Post'
import PostStat from './PostStat'
import Rating from './Rating'
import './style.css'

class SocialCardMini extends React.Component {
    render() {
        const style = { 
            width: '300px',
            backgroundColor: this.props.theme.cardBackgroundColor,
            clipPath: 'polygon(0% 0%, 35% 0%, 45% 10%, \
                    100% 10%, 100% 100%, 0% 100%',
            color: 'white',
            transition: 'background-color .75s ease-in-out'
        }

        const style2 = {
            filter: 'drop-shadow(1px 6px 15px rgba(0,0,0,0.5))'
        }

        return(
            <div style={style2}>
                <div style={style} >
                    <div className='blurred'>

                    </div>  
                    <DateInfo date={this.props.post.date}/>
                    <PersonInfo photo={this.props.post.userPhoto} 
                                name={this.props.post.name}
                                location={this.props.post.location}
                                bgcolor={this.props.theme.infoBackgoundColor}/>
                    <Post text=''
                        image={this.props.post.postImage}/>
                </div>
            </div>
        );
    }
}

export default SocialCardMini;