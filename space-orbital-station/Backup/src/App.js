
import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  NativeModules,
  Pano,
  Text,
  Sound,
  Model,
  View,
} from 'react-vr';

import Control from './components/control-button';
import Safety from './components/space_safety';
import Astronaut from './components/astronaut';
import Wrench from './components/wrench';
import ControlTip from './components/Controltip';
import Door from './components/hatchet'


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
       };
   }
  
   changeScene() {
       this.setState({
           background: 'space3.jpg',
           sound: 'spacesound.mp3',
           visible: false,
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

        <Sound
            loop={true}
            volume={0.6}
            source={{ mp3: asset(this.state.sound) }}
        />
        
        <VrButton onClick={this.changeScene.bind(this)}>
            <Text
                 style={{
                             transform: [
                            {translate: [-400, -200, -360]},
                            {rotateX: -90},
                            {rotateY: 15}
                                          ]}} 
            >I</Text>
            </VrButton>
            {this.renderItems()}

        {/* < Door/> */}
        <Safety />
        <Astronaut />
        <Wrench />
        <ControlTip />
        <Control /> 
         
      </View>
      
    );
  }
};

AppRegistry.registerComponent('space_orbital_station', () => space_orbital_station);

