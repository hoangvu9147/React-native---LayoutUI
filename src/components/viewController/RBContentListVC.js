/* eslint-disable prettier/prettier */

import React from 'react';
import {
  View,
    Text,
    StyleSheet,
    ScrollView,
    Button,
    Image,
    Dimensions,
    Alert,
    FlatList
} from 'react-native';

import CustomButton from '../viewCustom/CustomButton';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Swiper from 'react-native-swiper';

// import resource
const { width } = Dimensions.get('window');
const loading = require('../../../images/loading.gif');



export default class RBContentListVC extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            FlatListItems: [
                { key: 'One' },
                { key: 'Two' },
                { key: 'Three' },
                { key: 'Four' },
                { key: 'Five' },
                { key: 'Six' },
                { key: 'Seven' },
                { key: 'Eight' },
                { key: 'Nine' },
                { key: 'Ten' },
                { key: 'Eleven' },
                { key: 'Twelve' },
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
                    </Swiper>
                </View>
                <View>
                    <View style={styles.MainContainer}>
                        <FlatList
                            data={this.state.FlatListItems}
                            ItemSeparatorComponent={this.FlatListItemSeparator}
                            renderItem={({ item }) => (
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
        );
    }
}

const Slide = props => {
    return (<View style={styles.slide}>
        <Image onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={{ uri: props.uri }} />
        {
            !props.loaded && <View style={styles.loadingView}>
                <Image style={styles.loadingImage} source={loading} />
            </View>
        }
    </View>);
};

const styles = StyleSheet.create({
    MainContainer: {
        // Setting up View inside content in Vertically center.
        justifyContent: 'center',
        flex: 1,
        margin: 2,
        backgroundColor: '#afcB78',
    },
    heading: {
        color: 'white',
        marginTop: 10,
        fontSize: 22,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
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
    
    imageLeft: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: 80,
        backgroundColor: 'red',
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
    // init swips --
    wrapper: {
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




