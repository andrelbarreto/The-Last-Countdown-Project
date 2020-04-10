import React, { Component } from 'react'
import {
    VrButton,
    View,
    Text,
    Image,
    asset
} from 'react-vr'

export default class Control_tip1 extends Component {
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
                                <Text
                                    style={{
                                     backgroundColor: '#C0C0C0',
                                    color : '#000000',
                                    fontSize: 8,
                                    fontWeight: '300',
                                    layoutOrigin: [0, 0],
                                     paddingLeft: 0.1,
                                    paddingRight: 0.1,
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                    transform: [{ translate: [ -280, -6, 100]}, 
                                    { rotateY: 140 },
                                    { rotateX: -20} ]
                                   }}>  
                                    Cool down sequence
                        </Text>
                            </View>
                        )
                        : (
                            <Image
                                source={asset('control-button-tip.jpg')}
                                style={{
                                    position: 'absolute',
                                    width: 4,
                                    height: 2,
                                    layoutOrigin: [18.5, -0.6],
                                    transform: [{ translate: [42, 9, 10] }, { rotateY: 140 }],
                                }}
                            />
                        )
                    }

                </VrButton>
          //  </View>

        )
    }
}


module.exports = Control_tip1