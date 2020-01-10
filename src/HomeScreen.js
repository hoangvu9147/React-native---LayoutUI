import * as React from 'react';
import {Button, View, Text, Modal, StyleSheet, StatusBar} from 'react-native';
// import ModalScreen from '../modal/ModalScreen';
// import LogoTitle from '../common/LogoTitle';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {StackNavigator} from 'react-navigation';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};

    return {
      // headerTitle: () => <LogoTitle />,
      // headerLeft: () => (
      // <Button
      //     onPress={() =>
      //     // navigation.navigate('MyModal')}
      //     // title="Info"
      //     // color={Platform.OS === 'ios' ? '#fff' : null
      //     }
      // />
      // ),
      headerRight: () => (
        <Button
          onPress={params.increaseCount}
          title="+1"
          color={Platform.OS === 'ios' ? '#fff' : null}
        />
      ),
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({increaseCount: this._increaseCount});
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //     <Text>Home Screen</Text>
      //     <Text>Count: {this.state.count}</Text>
      //      <Button
      //         title="Go to Details"
      //         onPress={() => {
      //             /* 1. Navigate to the Details route with params */
      //             this.props.navigation.navigate('Details', {
      //                 itemId: 86,
      //                 otherParam: 'First Details',
      //             });
      //         }}
      //      />
      // </View>
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.isVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          {/*All views of Modal*/}
          {/*Animation can be slide, slide, none*/}
          <View style={styles.modal}>
            <Text style={styles.text}>Modal is open!</Text>
            <Button
              title="Click To Close Modal"
              onPress={() => {
                this.setState({isVisible: !this.state.isVisible});
              }}
            />
          </View>
        </Modal>

        {/*Button will change state to true and view will re-render*/}
        <Button
          title="Click To Open Modal a"
          onPress={() => {
            this.setState({isVisible: true});
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00ff00',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});
