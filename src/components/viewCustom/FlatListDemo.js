/*
simple suport
https://stackoverflow.com/questions/49312878/look-of-items-in-list-with-react-native
https://reactnativecode.com/flatlist-react-native/
*/

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  ScrollView,
  Icon,
  Image,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window');
const loading = require('../../../images/loading.gif');

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FlatListItems: [
        {key: 'One'},
        {key: 'Two'},
        {key: 'Three'},
        {key: 'Four'},
        {key: 'Five'},
        {key: 'Six'},
        {key: 'Seven'},
        {key: 'Eight'},
        {key: 'Nine'},
        {key: 'Ten'},
        {key: 'Eleven'},
        {key: 'Twelve'},
      ],
        imgList: [
            'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/1.jpg?raw=true',
            'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/10.jpg?raw=true',
            'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/2.jpg?raw=true',
            'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/3.jpg?raw=true',
            'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/4.jpg?raw=true',
            'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/5.jpg?raw=true',
            'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/6.jpg?raw=true',
            'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/7.jpg?raw=true',
            'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/8.jpg?raw=true',
            'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/9.jpg?raw=true',
        ],
        loadQueue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };

    // this.state = {
    //   imgList: [
    //     'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/1.jpg?raw=true',
    //     'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/10.jpg?raw=true',
    //     'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/2.jpg?raw=true',
    //     'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/3.jpg?raw=true',
    //     'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/4.jpg?raw=true',
    //     'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/5.jpg?raw=true',
    //     'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/6.jpg?raw=true',
    //     'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/7.jpg?raw=true',
    //     'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/8.jpg?raw=true',
    //     'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/9.jpg?raw=true',
    //   ],
    //   loadQueue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // };
    this.loadHandle = this.loadHandle.bind(this);
  }

  loadHandle(i) {
    let loadQueue = this.state.loadQueue;
    loadQueue[i] = 1;
    this.setState({
      loadQueue,
    });
  }

  FlatListItemSeparator = () => {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#607D8B',
        }}
      />
    );
  };

  GetItem(item) {
    Alert.alert(item);
  }

  render() {
    return (
        <ScrollView>
          <View>
            {/* <Text style={styles.heading}>Trending Ads India</Text> */}
                <Swiper style={styles.wrapper} height={240}
                    // onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                    // dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    // activeDot={<View style={{ backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    // paginationStyle={{
                    //     bottom: 300, left: null, right: 10
                    // }} 
                    autoplay
                    loop>
              {this.state.imgList.map((item, i) => (
                <Slide
                  loadHandle={this.loadHandle}
                  loaded={!!this.state.loadQueue[i]}
                  uri={item}
                  i={i}
                  key={i}
                />
              ))}
                    {/* <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
                        <Image resizeMode='stretch' style={styles.image} source={{ uri: 'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/9.jpg?raw=true' }} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
                        <Image resizeMode='stretch' style={styles.image} source={{ uri: 'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/9.jpg?raw=true' }} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
                        <Image resizeMode='stretch' style={styles.image} source={{ uri: 'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/9.jpg?raw=true' }} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
                        <Image resizeMode='stretch' style={styles.image} source={{ uri: 'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/9.jpg?raw=true' }} />
                    </View> */}
            </Swiper>
          </View>
      <View>
        <View style={styles.MainContainer}>
          <FlatList
            data={this.state.FlatListItems}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Image
                  style={styles.imageLeft}
                  source={{
                    uri:
                      'https://facebook.github.io/react-native/img/tiny_logo.png',
                  }}
                />
                <View
                  style={styles.contentView}
                  onPress={this.GetItem.bind(this, item.key)}>
                  <Text> {item.key}</Text>
                  <Text numberOfLines={2} ellipsizeMode="tail">
                    {item.key}
                  </Text>
                </View>

              </View>
            )}
          />
        </View>
          </View>
        </ScrollView>

    //   <View styles={{flex: 1, backgroundColor: '#afcB78'}}>
    //     <ScrollView>
    //     <View style={styles.headerContainer}>
    //       {/* <Text style={styles.heading}>Trending Ads India</Text> */}
    //       <Swiper
    //         loadMinimal
    //         loadMinimalSize={1}
    //         style={styles.wrapper}
    //         loop={true}
    //         autoplay={true}
    //                 height={240}
    //         // paginationStyle={{
    //         //     bottom: 380,
    //         //     left: 10,
    //         //     right: 10,
    //         // }}
    //       >
    //         {this.state.imgList.map((item, i) => (
    //           <Slide
    //             loadHandle={this.loadHandle}
    //             loaded={!!this.state.loadQueue[i]}
    //             uri={item}
    //             i={i}
    //             key={i}
    //           />
    //         ))}
    //       </Swiper>

    //     </View>
    //     <View>
    //       <View style={styles.MainContainer}>
    //         <FlatList
    //           data={this.state.FlatListItems}
    //           ItemSeparatorComponent={this.FlatListItemSeparator}
    //           renderItem={({item}) => (
    //             <View style={styles.item}>
    //               <Image
    //                 style={styles.imageLeft}
    //                 source={{
    //                   uri:
    //                     'https://facebook.github.io/react-native/img/tiny_logo.png',
    //                 }}
    //               />
    //               <View
    //                 style={styles.contentView}
    //                 onPress={this.GetItem.bind(this, item.key)}>
    //                 <Text> {item.key}</Text>
    //                 <Text numberOfLines={2} ellipsizeMode="tail">
    //                   {item.key}
    //                 </Text>
    //               </View>
    //             </View>
    //           )}
    //         />
    //       </View>
    //     </View>
    //     </ScrollView>
    //   </View>
    );
  }
}

const Slide = props => {
  return (
      <View style={styles.slide}>
      <Image
        onLoad={props.loadHandle.bind(null, props.i)}
        style={styles.image}
        source={{uri: props.uri}}
      />
      {!props.loaded && (
        <View style={styles.loadingView}>
          <Image style={styles.loadingImage} source={loading} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    // Setting up View inside content in Vertically center.
    justifyContent: 'center',
    flex: 1,
    margin: 2,
    backgroundColor: '#afcB78',
  },

  //   item: {
  //     padding: 10,
  //     fontSize: 18,
  //     height: 44,
  //   },
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 100,
    backgroundColor: '#FD6B78',
    // height: '18%',
    // width: '100%',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
//   image: {
//     width: 30,
//     height: 30,
//     marginRight: 10,
//   },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1',
  },
  contentView: {
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    left: 81,
    bottom: 0,
    right: 0,
    backgroundColor: 'red',
  },
  imageLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 80,
    backgroundColor: 'red',
  },

  // init swips --
  wrapper: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // height: '60%',
    // width: '100%',
    // backgroundColor: 'red',
    // height: '40%',
    // width: '100%',
    backgroundColor: 'red',
  },
  pagination_Style: {
    top: 100,
    left: 0,
    right: 0,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',

  },
  
  image: {
    width,
    flex: 1,
    backgroundColor: 'transparent',
  },

  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  loadingImage: {
    width: 60,
    height: 60,
  },
});

/*
<View style={styles.MainContainer}>
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({item}) => (
            <Text
              style={styles.item}
              onPress={this.GetItem.bind(this, item.key)}>
              {' '}
              {item.key}{' '}
            </Text>
          )}
        />
      </View>
*/
