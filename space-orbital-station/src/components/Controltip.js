import React, { Component } from 'react'
import {
    VrButton,
    View,
    Text,
    Image,
    asset
} from 'react-vr'

export default class ControlTip extends Component {
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
                                <Text
                                    style={{
                                       position: 'absolute',
                                       backgroundColor: '#C0C0C0',
                                       color : '#000000',
                                       fontSize: 3,
                                       fontWeight : 200,
                                        layoutOrigin: [18.5, -0.6],
                                        paddingLeft: 0.2,
                                        paddingRight: 0.2,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        transform: [{ translate: [32, 6, 20] }, { rotateY: 140 }, {rotateX : -30}],
                                    }}>
                                    1 of 2 is K?
                        </Text>
                           // </View>
                        )
                        : (
                            <Image
                                source={asset('control-button-tip.jpg')}
                                style={{
                                    position: 'absolute',
                                    width: 4,
                                    height: 2,
                                    layoutOrigin: [18.5, -0.6],
                                    transform: [{ translate: [32, 6, 10] }, { rotateY: 140 }, {rotateX: -32}],
                                }}
                            />
                        )
                    }

                </VrButton>
          //  </View>

        )
    }
}


module.exports = ControlTip