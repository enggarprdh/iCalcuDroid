import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
const KeypadPotrait=(props)=> {

        return(
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.operatorPads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('C')} 
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.operators}>C</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.operatorPads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('+-')}
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.operators}>+/-</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.operatorPads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('%')}
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.operators}>%</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.operatorCalPads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('/')}
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.operatorsCal}>÷</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.normalNumpads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('7')}
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.fonts}>7</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.normalNumpads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('8')}
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.fonts}>8</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.normalNumpads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('9')}
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.fonts}>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.operatorCalPads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('X')}
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.operatorsCal}>X</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.normalNumpads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('4')}
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.fonts}>4</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.normalNumpads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('5')}
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.fonts}>5</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.normalNumpads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('6')}
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.fonts}>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.operatorCalPads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('-')}
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.operatorsCal}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    
                    <View style={styles.normalNumpads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('1')}
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.fonts}>1</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.normalNumpads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('2')}
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.fonts}>2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.normalNumpads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('3')}
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.fonts}>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.operatorCalPads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('+')}
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.operatorsCal}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>   
                    <View style={styles.longNumpads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('0')}
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.zeroNumpads}>0</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.normalNumpads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('.')}
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.fonts}>,</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.operatorCalPads}>
                        <TouchableOpacity style={styles.touchStyle} onPress={()=>props.onKeyPadsPress('=')}
                            hitSlop={{top:20,bottom:20, left:50, right:50}}>
                            <Text style={styles.operatorsCal}>=</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
}

export default KeypadPotrait;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#000000"
    },
    row: {
        flexDirection:'row'
    },
    normalNumpads: {
        paddingHorizontal:44,
        backgroundColor:'#757575',
        marginVertical:5,
        aspectRatio:1,
        marginHorizontal:5,
        borderRadius:100/2       
    },
    longNumpads: {
        paddingHorizontal:45,
        backgroundColor:'#757575',
        marginVertical:5,
        aspectRatio:2.23,
        marginHorizontal:5,
        borderRadius:100/2    
    },
    operatorPads: {
        paddingHorizontal:44,
        backgroundColor:'#e0e0e0',
        marginVertical:5,
        aspectRatio:1,
        marginHorizontal:5,
        borderRadius:100/2       
    },
    operators: {
        fontSize:24,
        color:'#000000',
        textAlign:'center',
        marginTop:28
    },
    fonts: {
        fontSize:24,
        color:'#FFFFFF',
        textAlign:'center',
        marginTop:28
    },
    zeroNumpads: {
        fontSize:28,
        color:'#FFFFFF',
        textAlign:'center',
        marginTop:20,
        marginRight:115
    },
    touchStyle: {
        marginHorizontal:-15,
    },
    operatorCalPads: {
        paddingHorizontal:44,
        backgroundColor:'#ff864f',
        marginVertical:5,
        aspectRatio:1,
        marginHorizontal:5,
        borderRadius:100/2,
    },
    operatorsCal: {
        fontSize:24,
        color:'#FFFFFF',
        textAlign:'center',
        marginTop:28
    },
});