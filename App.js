/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, Button} from 'react-native';
import MainVC from './src/components/viewController/main/MainVC.js';
import RBContentListVC from './src/components/viewController/RBContentListVC.js';
import FlatListDemo from './src/components/viewCustom/FlatListDemo.js';
// import DetailsScreen from './src/DetailsScreen';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
        // <Button
        //   title="Go to Details... again"
        //   onPress={() => this.props.navigation.push('Details')}
        // />
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
        // <Button
        //   title="Go back"
        //   onPress={() => this.props.navigation.goBack()}
        // />
//       </View>
//     );
//   }
// }

const RootStack = createStackNavigator(
  {
    main: {
      screen: MainVC,
      navigationOptions: {
        header: null, //this will hide the header
      },
    },
    // contentList: RBContentListVC,
    contentList: {
      screen: RBContentListVC,
      navigationOptions: {
        title: 'Kho Sach',
        headerStyle: {
          height: 50,
        },
      },
    },
    listDemo: {
      screen: FlatListDemo,
    },
  },
  {
    initialRouteName: 'main',
    header: null,
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}