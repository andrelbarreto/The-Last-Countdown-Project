import React, { Component } from 'react'
import {
    VrButton,
    View,
    Image,
    asset
} from 'react-vr'

export default class Astronaut extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayingControlText: true
        }
        this.toggleDisplayText = this.toggleDisplayText.bind(this)
    }

    toggleDisplayText() {
        if (!this.state.displayingControlText) {
            this.setState({ displayingControlText: true })

        } else {
            this.setState({ displayingControlText: false })
        }
    }

    render() {
        return (
           // <View>
                <VrButton onClick={this.toggleDisplayText}>
                    {this.state.displayingControlText === true ?
                        (
                           <View>
                           <Image
                           source={asset('astronaut.png')}
                           style={{
                               position: 'absolute',
                               width: 91.3,
                               height:116.3,
                               layoutOrigin: [ 0, 0],
                               transform: [
                                   { translate: [-20, 165, -1000]}, 
                                   { rotateY: 180},
                                   { rotateX: 45}
                                
                            ]
                           }}
                       />
                           </View>
                        )
                        : (
                            <Image
                                source={asset('PathPuzzle.jpg')}
                                style={{
                                    position: 'absolute',
                                    width: 10.15,
                                    height: 13.5,
                                    layoutOrigin: [ 0, 0],
                                    transform: [{ translate: [12, 10, 10] }, { rotateY: -120 }],
                                }}
                            />
                        )
                    }

                </VrButton>
          //  </View>

        )
    }
}


module.exports = Astronaut