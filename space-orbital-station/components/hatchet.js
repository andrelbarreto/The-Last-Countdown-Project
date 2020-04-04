import React, { Component } from 'react'
import {
    VrButton,
    View,
    Text,
    Image,
    asset
} from 'react-vr'

export default class Door extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayingControlText: false
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
                <VrButton onClick={this.toggleDisplayText}
                
                // onClickSound={{ wav: asset('mic.wav') }}
                
                >
                    {this.state.displayingControlText === true ?
                        (
                           // <View>
                                <Text
                                    style={{
                                       // position: 'absolute',
                                        backgroundColor: '#FF0000',
                                        fontSize: 1,
                                        fontWeight: '400',
                                        layoutOrigin: [6, 6],
                                        paddingLeft: 0.2,
                                        paddingRight: 0.2,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        transform: [{ translate: [22, 6, 16] }, { rotateY: 140 }],
                                    }}>
                                    Solve puzzles to open it
                        </Text>
                           // </View>
                        )
                        : (
                            <Image
                                source={asset('Hatch-closed.png')}
                                style={{
                                    position: 'absolute',
                                    width: 280,
                                    height: 280,
                                    layoutOrigin: [0, 0],
                                    transform: [
                                        {translate: [-400, -200, -360]},
                                        {rotateX: -90},
                                        {rotateY: 15}
                                    ]             
                                }}
                            />
                        )
                    }

                </VrButton>
            </View>

        )
    }
}


module.exports = Door