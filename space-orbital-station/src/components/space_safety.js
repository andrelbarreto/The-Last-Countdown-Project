import React, { Component } from 'react'
import {
    VrButton,
    View,
    Image,
    Text,
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

 //------------Here is where I set the positioning of the Safety Card  -N8 ------------------------ 

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

//------------Here is where I set the positioning of the MIR_tip2.jpg  -N8 ------------------------                             
                            <View>
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
                            <Text
                             style={{
                                 position: 'absolute',
                                 backgroundColor: '#C0C0C0',
                                 color : '#000000',
                                 fontSize: 3,
                                 fontWeight: '300',
                                 layoutOrigin: [0, 0],
                                 paddingLeft: 0.2,
                                 paddingRight: 0.2,
                                 textAlign: 'center',
                                 textAlignVertical: 'center',
                                 transform: [{ translate: [ -201, -3, 100]}, 
                                    { rotateY: 140 },
                                    { rotateX: -20} ]
                             }}>
                             Wrong buttons, but 
                             Seek close to  them.
                             </Text>
                             </View>
                        )
                    }
                   </VrButton>
           //</View> 

        )
    }
}
module.exports = Safety
