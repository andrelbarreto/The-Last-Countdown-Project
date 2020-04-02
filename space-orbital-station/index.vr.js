
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
  
  render() {
    // AudioModule.playEnvironmental({
    //   source: asset('spacesound.mp3'),
    //   volume: 0.8, // play at 6/10 original volume
    // });
    return (
      
      <View>
        <Pano source={asset('space2.jpg')}/>
        
        {/* <Text
          style={{
            backgroundColor: '#000080',
            fontSize: 0.5,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          S. O. S.
        </Text> */}
        {/* <Model
          lit
          source={{
            obj: asset('speaker.obj'),
            mtl: asset('speaker.mtl')
          }}
          style={{
            color: "#666",
            transform: [
              {translate: [4, 0, 0]},
              {scale: 0.1},
              {rotateZ: 180},
              {rotateX: 180}
            ]
          }}
        >
          <Sound
            source={{ wav: asset('drums.wav') }}
            source={{ wav: asset('choir.wav') }}
            loop={true}
          />
        </Model> */}
       
        < Door/>
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
