import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class space_orbital_station extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('space2.jpg')}/>
        <Text
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
          Space Orbital Scape
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('space_orbital_station', () => space_orbital_station);
