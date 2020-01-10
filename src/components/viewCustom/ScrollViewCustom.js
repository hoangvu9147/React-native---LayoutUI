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
} from 'react-native';

import HeaderViewNavi from '../viewCustom/HeaderViewNavi';
import CustomButton from '../viewCustom/CustomButton';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Swiper from 'react-native-swiper';

// import resource
const { width } = Dimensions.get('window');
const loading = require('../../../images/loading.gif');



export default class ScrollViewCustom extends React.Component {
    state = {
        names: [
            { name: 'Ben', 'discrition': 'dwedwedwedwdwedwedwedwdwedwedwedwdwedwedwedwdwedwedwedwdwedwedwedwdwedwedwedw', id: 1 },
            { 'name': 'Susan', 'discrition': 'awdwedwdwdwb', 'id': 2 },
            { 'name': 'Robert', 'discrition': 'cdcdcdcdc', 'id': 3 },
            { 'name': 'Mary', 'discrition': 'awewecwecwewecwec', 'id': 4 },
            { 'name': 'Daniel', 'discrition': 'wwecwecwecw', 'id': 5 },
            { 'name': 'Laura', 'discrition': 'awwewddwedwedwd', 'id': 6 },
            { 'name': 'John', 'discrition': 'adwedwdwd', 'id': 7 },
            { 'name': 'Debra', 'discrition': 'edwedwdwedwe', 'id': 8 },
            { 'name': 'Aron', 'discrition': 'wefwefwewefwef', 'id': 9 },
            { 'name': 'Ann', 'discrition': 'wewedwedwedwed', 'id': 10 },
            { 'name': 'Steve', 'discrition': 'wedwedegwevcweer', 'id': 11 },
            { 'name': 'Olivia', 'discrition': 'ujukyujyjtyjtyjt', 'id': 12 },
        ],

    }
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         imgList: [
    //             'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/1.jpg?raw=true',
    //             'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/10.jpg?raw=true',
    //             'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/2.jpg?raw=true',
    //             'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/3.jpg?raw=true',
    //             'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/4.jpg?raw=true',
    //             'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/5.jpg?raw=true',
    //             'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/6.jpg?raw=true',
    //             'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/7.jpg?raw=true',
    //             'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/8.jpg?raw=true',
    //             'https://github.com/skptricks/React-Native/blob/master/React%20Native%20Vertical%20ScrollView%20Example%20Android/images/9.jpg?raw=true',
    //         ],
    //         loadQueue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     };
    //         this.loadHandle = this.loadHandle.bind(this);
    // }

    // loadHandle(i) {
    //     let loadQueue = this.state.loadQueue;
    //     loadQueue[i] = 1;
    //     this.setState({
    //         loadQueue,
    //     });
    // }



    render() {
        return (


            // <View style={styles.containerMain}>
            //     <Swiper loadMinimal loadMinimalSize={1}
            //      style={styles.wrapper}
            //      loop={true}
            //      autoplay={true}
            //         // eslint-disable-next-line react-native/no-inline-styles
            //      paginationStyle={{
            //             bottom: 100, left: 10, right: 10,
            //      }}
            //      >
            //         {
            //             this.state.imgList.map((item, i) => <Slide
            //                 loadHandle={this.loadHandle}
            //                 loaded={!!this.state.loadQueue[i]}
            //                 uri={item}
            //                 i={i}
            //                 key={i} />)
            //         }
            //     </Swiper>
            //     <View>
            //         <Text>Current Loaded Images: {this.state.loadQueue}</Text>
            //     </View>
            //  </View>

            <View >
                <ScrollView>
                    {
                        this.state.names.map((item, index) => (

                            <View key={item.id} style={styles.item}>
                                {/* <Text>{item.name}</Text> */}
                                <Image
                                    style={styles.imageLeft}
                                    source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
                                />
                                <View style={styles.contentView}>
                                    <Text style={styles.textStyleContent}>
                                        {item.name}
                                    </Text>
                                    <Text style={styles.textStyleContent} numberOfLines={2} ellipsizeMode='tail'>
                                        {item.discrition}
                                    </Text>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
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
    containerMain: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'column',
        height: '60%',
        width: '100%',
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
    textStyleContent: {
        color: '#000',
        fontSize: 15,
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
        position: 'absolute',
        top: 0,
        left: 0,
        height: '60%',
        width: '100%',
        backgroundColor: 'red',
    },
    pagination_Style: {
        top: 100, left: 0, right: 0,
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




