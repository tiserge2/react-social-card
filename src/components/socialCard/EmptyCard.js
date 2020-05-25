import React from 'react'
// import DateInfo from './DateInfo'
// import PersonInfo from './PersonInfo'
// import Post from './Post'
// import PostStat from './PostStat'
// import Rating from './Rating'

class EmptyCard extends React.Component {
    render() {
        return(
            <div style={style}>
                {/* <DateInfo date={this.props.post.date}/>
                <PersonInfo photo={this.props.post.userPhoto} 
                            name={this.props.post.name}
                            location={this.props.post.location}/>
                <Post text=''
                    image={this.props.post.postImage}/>
                {/* <Rating rate={this.props.post.Rating}/>
                <PostStat comment={this.props.post.comment}
                            like={this.props.post.like}
                            forward={this.props.post.forward}/> */} 
            </div>
        );
    }
}

const style = {
    width: '300px',
    backgroundColor: '#717568',
    clipPath: 'polygon(0% 0%, 35% 0%, 45% 10%, \
            100% 10%, 100% 100%, 0% 100%',
    color: 'white',
    boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)'
}

export default EmptyCard;