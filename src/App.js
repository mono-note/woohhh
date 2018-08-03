import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Background from "./img/bg_01.jpg"
import './App.css';
import ScrollMagic from 'ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import {TweenMax ,Linear}  from 'gsap/TweenMax';
import {TweenLite} from 'gsap/TweenLite';
import {ScrollToPlugin} from "gsap/ScrollToPlugin";

class App extends Component {
    constructor() {
    super();
    this.state = {
      itScroll:false
    };    
  }
  componentWillMount() {
    this.setState({height: window.innerHeight + 'px'});
    console.log(window.innerHeight)
  }
  componentDidMount() {
    let iconHuman = this.human;
    let images = [
      require('./img/human_03.png'),
      require('./img/human_02.png'),
    ];
    let obj = {curImg: 0};
    let tween = new TweenMax(obj, 0.5,
      {
        useFrames:true,
        curImg: images.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        repeat: 18,									// repeat 3 times
        // immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate:  (e) =>{
          iconHuman.setAttribute('src',images[obj.curImg]);
          // console.log(obj.curImg)
          
    let isScrolling
          console.log('update')
          window.addEventListener('scroll',  ( event ) =>{
            // Clear our timeout throughout the scroll
           this.setState({itScroll:true})
            window.clearTimeout( isScrolling ); 
            isScrolling = setTimeout(()=> { 
              this.setState({itScroll:false})
              iconHuman.setAttribute('src',require('./img/human_01.png'));
            }, 66);
         }, false);
        },
      }
    )
    


    const controller = new ScrollMagic.Controller({loglevel: 0});
    let scene = new ScrollMagic.Scene({
      triggerHook:"0",
      offset:0,
      duration: 3200
    })
    .addTo(controller)
    .addIndicators()

    scene
    .on("update", function (e) {
      // console.log(e.target.controller().info("scrollDirection"));
    })
    .on("progress", function (e) {
      // console.log(e.progress.toFixed(3))
    })
    .on("enter leave", function (e) {
      // console.log(e.type == "enter" ? "inside" : "outside");
    })
    

    scene.setTween(tween)
    
  }
  handleScroll(event) {
    console.log('the scroll things', event)
  };
  render() {
    return (
      <div className="App">
        <div className="main-container"
          style={{backgroundImage: `url(${Background})`}}>
            <div className="spacer s2"></div>
            <div 
              id="trigger" 
              className="spacer s0" 
              ref={o => this.trigger = o}>  
            </div>   
            <div id="imagesequence">
              <img id="myimg" src={require('./img/human_01.png')} alt="" ref={o=>this.human =o}/>
            </div>         
            <div className="spacer s2"></div>            
        </div>
      </div>
    );
  }
}

export default App;
