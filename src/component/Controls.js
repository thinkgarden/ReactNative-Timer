import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import {icons} from './Theme';

export default class Controls extends Component {
  render() {
    let {isRunning,toggleTimer,resetTimer} = this.props;
    return (
      <View style={styles.controlsLayoutMain}>
        <View style={{position:'absolute',top:0, left:5, bottom:0,justifyContent:'center'}}>
          <TouchableOpacity onPress={resetTimer}> 
            <Image style={[{tintColor:'#c0c0c0'}]} source={icons.reset}/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={toggleTimer}> 
          <Image style={[{tintColor:'#fff'}]} source={ isRunning? icons.pause : icons.start}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  controlsLayoutMain: {
    flex:1,
    alignItems: 'center',
  }
})