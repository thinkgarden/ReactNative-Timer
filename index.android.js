/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import {icons} from './src/component/Theme';
import {zeroPadding} from './src/component/FormatString';
import Timer from "./src/component/Timer";
import Controls from "./src/component/Controls";

const timer = new Timer();

export default class AwesomeProject extends Component {

  constructor() {
    super();
    this.state = {
      minutes: '00',
      seconds: '00',
      hundredth: '00',
      isRunning: false,
    }
    this.toggleTimer = this.toggleTimer.bind(this);
    this.onTimerUpdate = this.onTimerUpdate.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  componentDidMount() {
    this.timer = new Timer(this.onTimerUpdate);
    // console.warn(zeroPadding);
  }

  onTimerUpdate() {
   let {minutes,seconds,hundredth} = this.timer.duration();
   let minutesFormated = zeroPadding(minutes);
   let secondsFormated = zeroPadding(seconds)
   this.setState({minutes:minutesFormated,seconds:secondsFormated,hundredth});
  }

  toggleTimer() {
    if(this.state.isRunning) {
      this.timer.pause();
      this.setState({isRunning:false});
    } else {
      this.timer.start();
      this.setState({isRunning:true});
    }
  }

  resetTimer() {
    this.timer.reset();
    this.setState({isRunning:false,minutes:"00",seconds:"00",hundredth:"00"});
  }
  
  render() {
    let {minutes,seconds,hundredth,isRunning} = this.state;
    return (
      <Image source={icons.background} style={[styles.container,styles.backgroundImage]}>
        <View style={styles.timerDisplayLayout}> 
            <View style={[styles.timerCircle]}>
              <View style={[styles.timerCircleText]}>
                <Text style={styles.mainLabel}>
                  {minutes}:{seconds}
                </Text>
                <Text style={styles.subLabel}>
                  {hundredth}
                </Text>
              </View>
            </View>
        </View>        
        <View style={styles.controlsLayout}>
          <Controls
            toggleTimer={this.toggleTimer}
            resetTimer={this.resetTimer}
            isRunning={isRunning}
          />
        </View> 
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf:'stretch'
  },
   backgroundImage: {
    width: null,
    height: null,
    backgroundColor: 'transparent',
    resizeMode: 'cover'
  },
  timerDisplayLayout: {
    flexGrow:5,
    // backgroundColor:'rgba(255,0,0,.2)',
    justifyContent:'center',
    alignItems: 'center'
  },
  controlsLayout: {
    flexGrow:1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    // backgroundColor:'rgba(0,255,0,.3)'
  },
  timerCircle: {
    width: 200,
    height: 200,
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius: 100,
    justifyContent:'center',
    alignItems: 'center'
  },
  timerCircleText: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  circle: {
    width:30,
    height:30,
    backgroundColor:'red',
    borderRadius: 15
  },
  lcenter: {
    justifyContent:'center',
    alignItems: 'center'
  },
  mainLabel: {
    color:'#fff',
    fontSize:48,
    fontWeight:'200'
  },
  subLabel: {
    borderWidth:1,
    width:30,
    color:'#fff',
    fontSize:20,
    fontWeight:'300',
    marginBottom:8
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
