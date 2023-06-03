import React from 'react';
import './App.css';
import SocialCard from '../components/socialCard/SocialCard';
import SocialCardMini from '../components/socialCard/SocialCardMini';
import CardShower from '../components/cardShower/CardShower'
import indexStyle from '../index.css'
import classes from './App.css'
import ThemeChanger from '../components/themeChanger/ThemeChanger'
import checkSimilarity from '../utils/checkSimilarity'
import {isFirstTime} from '../utils/visitor'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          postId: '0',
          date: '12:06 12 fev 2019',
          userPhoto: 'https://i.ibb.co/xgYp3gJ/Screenshot-20190912-000604-Multi-Parallel-min.jpg',
          name: 'John Doe',
          location: 'Cayes, Haiti',
          postText: 'Life can flip in a matter of second',
          postImage: 'https://i.ibb.co/MMbG4qv/241480.jpg',
          rating: 1,
          comment: 60,
          like: 10,
          forward: 22
        },
        {
          postId: '1',
          date: '22:06 12 jan 2017',
          userPhoto: 'https://i.ibb.co/qpsnPFJ/Smiley-Thumbnail.png',
          name: 'Casimy Valce',
          location: 'Cayes, Haiti',
          postText: 'Life can flip in a matter of second',
          postImage: 'https://i.ibb.co/fkkxsD9/222086.jpg',
          rating: 3,
          comment: 20,
          like: 140,
          forward: 2
        },
        {
          postId: '2',
          date: '22:06 12 jan 2017',
          userPhoto: 'https://i.ibb.co/HhWzmJv/adjust-tie-1024x683.jpg',
          name: 'Jenn Mag',
          location: 'Cayes, Haiti',
          postText: 'No one can treat you as if.',
          postImage: 'https://i.ibb.co/f0Cdj9j/234287.jpg',
          rating: 3,
          comment: 100,
          like: 100,
          forward: 22
        }
        ,
        {
          postId: '3',
          date: '22:06 12 jan 2017',
          userPhoto: 'https://i.ibb.co/564kzTD/portrait-smiling-red-haired-millennial-260nw-1194497251.png',
          name: 'Lado Mac',
          location: 'Cayes, Haiti',
          postText: 'What if we try to leave',
          postImage: 'https://i.ibb.co/cbbzPWc/222819.jpg',
          rating: 4,
          comment: 100,
          like: 100,
          forward: 22
        },
        {
          postId: '4',
          date: '22:06 12 jan 2017',
          userPhoto: 'https://i.ibb.co/M2BmN2T/2e2fac9d4a392456e511345021592dd2.jpg',
          name: 'Casa de Papel',
          location: 'Cayes, Haiti',
          postText: 'Put God first in your everything',
          postImage: 'https://i.ibb.co/n6MZ2Np/231437.jpg',
          rating: 2,
          comment: 100,
          like: 100,
          forward: 22
        },
        {
          postId: '5',
          date: '22:06 12 jan 2017',
          userPhoto: 'https://i.ibb.co/hFFN9BY/photo-1518806118471-f28b20a1d79d.jpg',
          name: 'Badooz Jean',
          location: 'Cayes, Haiti',
          postText: 'Life can flip in a matter of second',
          postImage: 'https://i.ibb.co/d4MqXW3/219439.jpg',
          rating: 5,
          comment: 100,
          like: 100,
          forward: 22
        },
        {
          postId: '6',
          date: '22:06 12 jan 2017',
          userPhoto: 'https://i.ibb.co/hFFN9BY/photo-1518806118471-f28b20a1d79d.jpg',
          name: 'Cartel Martel',
          location: 'Cayes, Haiti',
          postText: 'Life can flip in a matter of second',
          postImage: 'https://i.ibb.co/R0zVMz2/113654.jpg',
          rating: 0,
          comment: 100,
          like: 100,
          forward: 22
        },
        {
          postId: '7',
          date: '22:06 12 jan 2017',
          userPhoto: 'https://i.ibb.co/qpsnPFJ/Smiley-Thumbnail.png',
          name: 'Olson Maso',
          location: 'Cayes, Haiti',
          postText: 'Life can flip in a matter of second',
          postImage: 'https://i.ibb.co/VmvXM2k/216124.jpg',
          rating: 1,
          comment: 100,
          like: 100,
          forward: 22
        }
      ],
      postToShow:[
        0, 1, 2
      ],
      postNumbered: [
        0, 1, 2, 3, 4, 5, 6, 7
      ],
      theme: {
        background: '#61dafb',
        cardBackgroundColor: '#554640',
        infoBackgoundColor: '#00bcd4',
      }
    }
  }

  componentDidMount = () => {
    if(isFirstTime()) {
      console.log("Send +1 visit to server")
      this.updateVisit() 
    } else {
      console.log("Dont send +1 visit to server")
    }
  }

  updateVisit = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch('https://visit-counter-1.herokuapp.com/api/addVisit', {
      method: 'POST',
      mode: "no-cors",
      cache: "no-cache", 
      credentials: "same-origin",
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/x-www-form-urlencoded'
      },
      redirect: "follow", 
      referrer: "no-referrer", 
      body: 'websiteId=5ed2ee6b7c213e044cc03582'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      // throw new Error(err)
    })
  }

  handleSwipeChange = direction => {
    console.log("[App.js] handleSwipeChange");
    console.log("[App.js] ", direction);

    if(direction === 'right') {
      console.log("Droite");

      if(this.state.postToShow.length === 3) {
        //lets check if we have the first 3
        if(checkSimilarity(this.state.postToShow, this.state.postNumbered, 3, 'avant',)) {
          console.log("first 3");
          let temp = [...this.state.postToShow];
          temp.push(temp[temp.length - 1] + 1);
          this.setState({
            postToShow: [...temp]
          });
        }

        //lets check if we have the last 3
        if(checkSimilarity(this.state.postToShow, this.state.postNumbered, 3, 'arriere',)) {
          console.log("last 3");
          console.log("Nothing to show");
        }
      }

      if(this.state.postToShow.length === 4) {
        //lets check if we have the first 4
        if(checkSimilarity(this.state.postToShow, this.state.postNumbered, 4, 'avant',)) {
          console.log("first 4");
          let temp = [...this.state.postToShow];
          temp.push(temp[temp.length - 1] + 1);
          this.setState({
            postToShow: [...temp]
          });
        }

        // lets check if we have the last 4
        if(checkSimilarity(this.state.postToShow, this.state.postNumbered, 4, 'arriere',)) {
          console.log("last 4");
          let temp = [...this.state.postToShow];
          temp.shift();
          this.setState({
            postToShow: [...temp]
          });
        }
      }

      if(this.state.postToShow.length === 5 && 
        (this.state.postToShow[this.state.postToShow.length - 1] === 
          this.state.postNumbered[this.state.postNumbered.length - 1])
      ) {
        console.log("first situation");
        let temp = [...this.state.postToShow];
        temp.shift();
        this.setState({
          postToShow: [...temp]
        });
      }

      if(this.state.postToShow.length === 5 && 
        (this.state.postToShow[this.state.postToShow.length - 1] !== 
        this.state.postNumbered[this.state.postNumbered.length - 1])
      ) {
          console.log("second situation");
        let temp = [...this.state.postToShow];
        temp.shift();
        temp.push(temp[temp.length - 1] + 1);
        this.setState({
          postToShow: [...temp]
        });
      }
    }

    if(direction === 'left') {
      console.log("Gauche");

      if(this.state.postToShow.length === 3) {
        //lets check if we have the last 3
        if(checkSimilarity(this.state.postToShow, this.state.postNumbered, 3, 'arriere',)) {
          console.log("last 3");
          let temp = [...this.state.postToShow];
          temp.unshift(temp[0] - 1);
          this.setState({
            postToShow: [...temp]
          });
        }

        // let check if we have the first 3
        if(checkSimilarity(this.state.postToShow, this.state.postNumbered, 3, 'avant',)) {
          console.log("first 3");
          console.log("nothing to show");
        }
      }

      if(this.state.postToShow.length === 4) {
        //lets check if we have the last 4
        if(checkSimilarity(this.state.postToShow, this.state.postNumbered, 4, 'arriere',)) {
          console.log("last 4");
          let temp = [...this.state.postToShow];
          temp.unshift(temp[0] - 1);
          this.setState({
            postToShow: [...temp]
          });
        }

        // lets check if we have the first 4
        if(checkSimilarity(this.state.postToShow, this.state.postNumbered, 4, 'avant',)) {
          console.log("first 4");
          let temp = [...this.state.postToShow];
          temp.pop();
          this.setState({
            postToShow: [...temp]
          });
        }
      }

      if(this.state.postToShow.length === 5 && 
        (this.state.postToShow[0] !== this.state.postNumbered[0])
      ) {
        console.log("left 1st");
        const temp = [...this.state.postToShow];
        temp.pop();
        temp.unshift(temp[0] - 1);
        this.setState({
          postToShow: [...temp]
        });
      }

      if(this.state.postToShow.length === 5 && 
        (this.state.postToShow[0] === this.state.postNumbered[0])
      ) {
        console.log("left 2nd");
        let temp = [...this.state.postToShow];
        temp.pop();
        this.setState({
          postToShow: [...temp]
        });
      }
    }
  }

  handleColorChange = (part, color) => {
    if(part === 'card') {
      const temp = {...this.state.theme}
      temp.cardBackgroundColor = color
      this.setState({
        theme: {...temp}
      });
    }

    if(part === 'background') {
      const temp = {...this.state.theme}
      temp.background = color
      this.setState({
        theme: {...temp}
      });
    }

    if(part === 'other') {
      const temp = {...this.state.theme}
      temp.infoBackgoundColor = color
      this.setState({
        theme: {...temp}
      });
    }
  }

  render() {
    const appStyle = {
      marginTop: '-20px',
      paddingTop: '10px',
      minHeight: '101.4vh',
      overflow: 'hidden',
      backgroundColor: this.state.theme.background,
      transition: 'background-color .75s ease-in-out'
    }


    console.log('[App.js] render');
    const postToShow = [];
    const arrayNumberAllPost = [];

    for(var i = this.state.postToShow[0]; i <= this.state.postToShow[0] + this.state.postToShow.length - 1; i++) {
      postToShow.push(this.state.posts[i])
    }

    for(var j = 0; j < this.state.posts.length; j++) {
      arrayNumberAllPost.push(j);
    }
    
    console.log('post To show: ', postToShow);
    return (
      <div style={appStyle} className="App">
        <ThemeChanger color={this.state.theme}
                      handleColorChange={this.handleColorChange.bind(this)}/>

        <CardShower posts={postToShow} 
                    arrayNumberPost={this.state.postToShow} 
                    arrayNumberAllPost={arrayNumberAllPost} 
                    swipeChange={this.handleSwipeChange.bind(this)}
                    theme={this.state.theme}/>
      </div>
    )
  }
}

export default App;
