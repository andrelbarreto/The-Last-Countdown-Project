import React, { Component } from 'react'
import {
    VrButton,
    View,
    Image,
    asset
} from 'react-vr'

export default class Safety extends Component {
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
                           // <View>
                           <Image
                           source={asset('space-safety.jpg')}
                           style={{
                               position: 'absolute',
                               width: 17.75,
                               height:83.125,
                               layoutOrigin: [ 0, 0],
                               transform: [
                                   { translate: [115, 30, -25]},
                                   { rotateY: 325},
                                   { rotateX: 5},
                               ]
                           }}
                            />
                           // </View>
                        )
                        : (
                            <Image
                            source={asset('MIR_tip2.jpg')}
                                style={{
                                    position: 'absolute',
                                    width: 43.25,
                                    height: 22,
                                    layoutOrigin: [ 0, 0],
                                    transform: [{ translate: [ -200, -25, 100]}, 
                                    { rotateY: 140 },
                                    { rotateX: -20},
                                ]
                                }}
                       />
                        )
                    }

                </VrButton>
          //  </View>

        )
    }
}
module.exports = Safety
