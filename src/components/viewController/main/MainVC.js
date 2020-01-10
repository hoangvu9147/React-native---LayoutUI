import React from 'react';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';
import CustomButton from '../../viewCustom/CustomButton';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class MainVC extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <Text> Main Content Here</Text>
        <View style={styles.bottomView}>
          {/* <Text style={styles.textStyle}>Bottom View</Text> */}
          <View style={styles.box1}>
            <CustomButton
              text="Click to"
              onPress={() => {
                this.props.navigation.navigate('contentList');
              }}
            />
          </View>
          <View style={styles.box2} />
          <CustomButton
            text="right"
            onPress={() => {
              this.props.navigation.navigate('listDemo');
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: '#EE5407',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },

  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
  box1: {
    position: 'absolute',
    top: 3,
    left: 0,
    width: 100,
    height: 50,
    backgroundColor: 'red',
  },
  box2: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 100,
    height: 50,
    backgroundColor: 'blue',
  },
});
