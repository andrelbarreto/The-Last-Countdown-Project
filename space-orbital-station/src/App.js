
import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  NativeModules,
  Pano,
  Text,
  VrButton,
  Sound,
  Model,
  Video,
  View,
} from 'react-vr';

import Control from './components/control-button';
import Safety from './components/space_safety';
import Astronaut from './components/astronaut';
import Wrench from './components/wrench';
import ControlTip from './components/Controltip';
import Door from './components/hatchet'
//import VideoElement from '/components/Videoelement'

const DEFAULT_ANIMATION_BUTTON_RADIUS = 50;
const DEFAULT_ANIMATION_BUTTON_SIZE = 0.05;
const {AudioModule} = NativeModules;



export default class space_orbital_station extends React.Component {

   constructor(props){
       super(props);
       this.state = {
           background: 'space2.jpg',
           sound: 'spacesound.mp3',
           visible: true,
           componentsRender : [<Safety/>, <Control/>, <Astronaut/>, <Wrench/>, <ControlTip/> ]
       };
   }
  
   changeScene() {
       this.setState({
           background: 'space1.jpg',
           sound: 'escape_pod.mp3',
           visible: false,
           componentsRender : [ ]
       });
   }

   renderItems(){
       if (this.state.visible === true) {
           return  <Door />
       }
   }
  render() {
   
    return (
      
      <View>
        <Pano source={asset(this.state.background)}/>
         <Video 
            style = {{height:6, width:3}}
            source = {{url: 'alert.mp4' }}
            playerState = {this.state.playerState}
            />
            
        <Sound
            loop={true}
            volume={0.6}
            source={{ mp3: asset(this.state.sound) }}
        />
        
        {/* <VrButton onClick={this.changeScene.bind(this)}>
            <Text
                 style={{
                  backgroundColor: '#FF0000',
                  fontSize: 1,
                  fontWeight: '400',
                  layoutOrigin: [0, 0],
                  paddingLeft: 0.2,
                  paddingRight: 0.2,
                  textAlign: 'center',
                             transform: [
                            {translate: [-400, -200, -360]},
                            {rotateX: -90},
                            {rotateY: 15}
                                          ]}} 
            >Click right HERE!!!</Text>
            
          </VrButton> */}
            
            {/* <View style={{
             flex: 1,
             width: 8,
            flexDirection: 'column',
             alignItems: 'stretch',
             backgroundColor: '#333333',
            layoutOrigin: [0.5, 0.5],
             transform: [{translate: [0, 0, -5]}]
            }}> */}
                    
          {/* </View> */}

            {this.renderItems()}

        {/* < Door/> */}
        {/* <Safety /> */}
        {/* <Astronaut />
        <Wrench />
        <ControlTip /> */}
        {/* <Control />   */}
         {this.state.componentsRender.map(component=>component)}
      </View>
      
    );
  }
};

AppRegistry.registerComponent('space_orbital_station', () => space_orbital_station);

