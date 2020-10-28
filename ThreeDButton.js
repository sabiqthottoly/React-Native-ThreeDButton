import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated } from "react-native";


export default class ThreeDButton extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  onClick=()=>{
    this.props.onPress()
  }

  handleAirhorn = async () => {
    try {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 10,
      }).start();
    } catch (e) {}
  };
  handleButtonUp = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration:5,
    }).start();
  };
  
  render() {
    const { children, customOuterStyle, customInnerStyle, customTextStyle, disabled, coins, customButtonStyle, custominsideView } = this.props
    const { textStyle } = styles;

    const inner = {
      borderRadius: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 20],
      }),
    };

    const heightStyle = {
      marginTop: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-7, 0],
      }),
      paddingBottom: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [7, 0],
      }),
    };
    
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback style={[customButtonStyle]}onPressIn={this.handleAirhorn} onPress={this.onClick} onPressOut={this.handleButtonUp}>
            <View style={[styles.outer]}>
              <Animated.View style={[styles.defaultHeight, heightStyle, customOuterStyle]}>
                <Animated.View style={[styles.defaultInner, inner,customInnerStyle, custominsideView]}>
                    <Text style={[textStyle, customTextStyle]}>{children}</Text>
                </Animated.View>
              </Animated.View>
            </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  outer:{
      width:'100%'
  },
  defaultHeight: {
    backgroundColor: '#cbbce6',
    borderRadius: 16,
    elevation:5,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    elevation:5,
    marginLeft: 30,
    marginRight: 30,
  },
  defaultInner: {
     backgroundColor: '#e5ddf3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: 48,
    flexDirection: 'row'
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 22
  },
});