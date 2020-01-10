import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

export default class HeaderViewNavi extends Component {
  render() {
    const {text, onPress} = this.props;
    return (
      <View style={styles.headerView}>
        <Text style={styles.title}>{text}</Text>
        <View style={styles.backIcon}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => onPress()}>
            <Image
              style={styles.ImageIconStyle}
              source={require('../../../images/ic_back.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

HeaderViewNavi.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: '#ffffff',
        margin: 3,
        textAlign: 'center',
        alignItems: 'center',
    },
    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    headerView: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 40,
        backgroundColor: 'blue',
    },
    buttonStyle: {
        padding: 10,
        backgroundColor: '#202646',
        borderRadius: 5
    },
    backIcon: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 60,
        height: 40,
        backgroundColor: 'blue',
    },
});