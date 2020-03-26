import React, { Component } from 'react'
import {
    VrButton,
    View,
    Text,
    Image,
    asset
} from 'react-vr'

export default class Control extends Component {
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
            <View>
                <VrButton onClick={this.toggleDisplayText}>
                    {this.state.displayingControlText === true ?
                        (
                           // <View>
                                <Text
                                    style={{
                                       // position: 'absolute',
                                        backgroundColor: '#FF0000',
                                        fontSize: 0.9,
                                        fontWeight: '400',
                                        width: 5,
                                        length: 5,
                                        layoutOrigin: [9.5, 0.1],
                                        paddingLeft: 0.2,
                                        paddingRight: 0.2,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        transform: [{ translate: [32, 6, 10] }, { rotateY: 90 }],
                                    }}>
                                    Use Control Buttons
                        </Text>
                           // </View>
                        )
                        : (
                            <Image
                                source={asset('control.jpg')}
                                style={{
                                    position: 'absolute',
                                    width: 5,
                                    height: 5,
                                    layoutOrigin: [8.5, -0.6],
                                    transform: [{ translate: [32, 6, 10] }, { rotateY: 140 }],
                                }}
                            />
                        )
                    }

                </VrButton>
            </View>

        )
    }
}


module.exports = Control