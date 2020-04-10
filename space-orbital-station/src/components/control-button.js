import React, { Component } from 'react'
import {
    VrButton,
    View,
    Text,
    Image,
    Sound,
    asset,
} from 'react-vr'
import * as THREE from 'three';

export default class Control extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayingControlText: true,
            puzzlecontrolsolved : false
        }
        this.toggleDisplayText = this.toggleDisplayText.bind(this);
        this.puzzlecontrolsolved = this.togglePuzzleSolved.bind(this)
    }

    get3DPoint(camera, x, y) {
        var mousePosition = new THREE.Vector3(x, y, 0.5);
        mousePosition.unproject(camera);
        var dir = mousePosition.sub(camera.position).normalize();
        return dir;
    }

    togglePuzzleSolved() {
        if (!this.state.puzzlecontrolsolved) {
            this.setState({ puzzlecontrolsolved : true })

        } else {
            this.setState({ displayingControlText: false })
        }
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
                
                onClickSound={{ wav: asset('mic.wav') }}
                
                >
                    {this.state.displayingControlText === false ?
                        (
                           // <View>
                                <Text
                                    style={{
                                       // position: 'absolute',
                                        backgroundColor: '#FF0000',
                                        fontSize: 10,
                                        fontWeight: '500',
                                        layoutOrigin:[ 0, 0],
                                        paddingLeft: 0.2,
                                        paddingRight: 0.2,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        transform: [{ translate: [-390, 95, 375] }, { rotateY: 145 }],
                                    }}>
                                    Use Control Button
                        </Text>
                           // </View>
                        )
                        : (
                            //<View>
                            // <VrButton
                            // style={{
                            //     borderWidth : 2,
                            //     borderColor:  '#C0C0C0',
                            //     overflow: 'visible',
                            // }} onClick={this.get3DPoint()} onClickSound={{ mp3: asset('console_alarm.mp3') }}
                            // >
                            <Image
                                source={asset('control.jpg')}
                                style={{
                                    position: 'absolute',
                                    width: 200,
                                    height: 200,
                                    layoutOrigin: [0, 0],
                                    transform: [
                                        { translate: [-400, 100, 375]},
                                        { rotateY: 140 },
                                        { rotateX: -10},
                                        { rotateZ: 0}
                                    ],
                                }}
                            />
                            
                           // </VrButton>
                           // </View>
                        )
                    }

                </VrButton>
            </View>

        )
    }
}


module.exports = Control