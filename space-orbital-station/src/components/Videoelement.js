import React from 'react';
import {
  Video,
  View,
  asset
} from 'react-vr';

//Element

export default class VideoElement extends React.Component {
  render() {
    return (
      <View style={{ margin: 0.1, height: 4}}>
        <Video style={{height: 4}} source={asset('alert.mp4')} />
      </View>
    )
  }
}
module.exports = VideoElement;


