import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

export default class CustomButton extends Component {
  render() {
    const {text, onPress} = this.props;
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={() => onPress()}>
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

CustomButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center'
    },

    buttonStyle: {
        padding: 10,
        backgroundColor: '#202646',
        borderRadius: 5
    }
});