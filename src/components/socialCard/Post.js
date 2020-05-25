import React from 'react'


const Post = (props) => {
    const handleImageShow = () => {
        console.log("image click")
        props.imageModal();
    }

    const modalStyle = {
        position: 'absolute'
    }

    return(
        <div>
            <div style={PostStyle}>
                <p style={captionStyle}>
                    {props.text}
                </p>
                <img src={props.image}
                    style={ImageStyle} 
                    alt='Post'
                    onClick={handleImageShow}
                />
            </div>
        </div>
    )
}

const handleImageShow = () => {
    console.log("image clicked...");
}

const PostStyle = {

}

const captionStyle = {
    fontSize: '14px',
    padding: '5px'
}

const ImageStyle = {
    width: '100%',
    cursor: 'pointer'
}

export default Post;