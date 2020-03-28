<<<<<<< HEAD
import React from 'react';
=======
import React, { Component } from 'react';
>>>>>>> 6da4fe25a69a801f17f251bfeac38d0b2b9307f2
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

<<<<<<< HEAD
=======
import Control from './components/control-button'

>>>>>>> 6da4fe25a69a801f17f251bfeac38d0b2b9307f2
export default class space_orbital_station extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('space2.jpg')}/>
        <Text
          style={{
            backgroundColor: '#000080',
<<<<<<< HEAD
            fontSize: 0.5,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
=======
            fontSize: 0.3,
            fontWeight: '300',
            layoutOrigin: [+0.5, 0.5],
>>>>>>> 6da4fe25a69a801f17f251bfeac38d0b2b9307f2
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
<<<<<<< HEAD
          Space Orbital Scape
        </Text>
=======
          S. O. S.
        </Text>
        <Control />
>>>>>>> 6da4fe25a69a801f17f251bfeac38d0b2b9307f2
      </View>
    );
  }
};

AppRegistry.registerComponent('space_orbital_station', () => space_orbital_station);
