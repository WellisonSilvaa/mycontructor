import React, { Component, useState } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Pressable, 
    FlatList,
    RefreshControl,
    SafeAreaView,
    ScrollView, 
} from 'react-native'

// import PostList from './PostList'

import commonStyles from "../commonStyles";

import Icon from "react-native-vector-icons/FontAwesome";
import IconIonic from "react-native-vector-icons/Ionicons"
import Posts from '../components/Posts';

const refreshing = false;

const state = {
    posts:  [
        {
            id: '1',
            name: 'Wellison_Silvah',
            img: require('../../assets/imgs/IMG_20230623_090116794_PORTRAIT~2.jpg'),
            imgPost: require('../../assets/imgs/b449b72a72f22a24a295fafc28894300.jpg'),
            numLikes: 34
        },
        {
            id: '2',
            name: 'Laura_CostaS2',
            img: require('../../assets/imgs/Screenshot_20230424-194836_One UI Home.jpg'),
            imgPost: require('../../assets/imgs/7eaf71b50ee7d7c1213d19f7b3ccf6c1.jpg'),
            numLikes: 49
        },
        {
            id: '3',
            name: 'Felipe_CostaSK8',
            img: require('../../assets/imgs/0cb985260bb744dc0e1927f7e83b9bbf.jpg'),
            imgPost: require('../../assets/imgs/login.jpg'),
            numLikes: 58
        },
        {
            id: '4',
            name: 'Laura_CostaS2',
            img: require('../../assets/imgs/Screenshot_20230424-194836_One UI Home.jpg'),
            imgPost: require('../../assets/imgs/7eaf71b50ee7d7c1213d19f7b3ccf6c1.jpg'),
            numLikes: 49
        },
        {
            id: '5',
            name: 'Felipe_CostaSK8',
            img: require('../../assets/imgs/0cb985260bb744dc0e1927f7e83b9bbf.jpg'),
            imgPost: require('../../assets/imgs/login.jpg'),
            numLikes: 58
        },
        {
            id: '6',
            name: 'Laura_CostaS2',
            img: require('../../assets/imgs/Screenshot_20230424-194836_One UI Home.jpg'),
            imgPost: require('../../assets/imgs/7eaf71b50ee7d7c1213d19f7b3ccf6c1.jpg'),
            numLikes: 49
        },
        {
            id: '12',
            name: 'Felipe_CostaSK8',
            img: require('../../assets/imgs/0cb985260bb744dc0e1927f7e83b9bbf.jpg'),
            imgPost: require('../../assets/imgs/login.jpg'),
            numLikes: 58
        },
        {
            id: '213',
            name: 'Laura_CostaS2',
            img: require('../../assets/imgs/Screenshot_20230424-194836_One UI Home.jpg'),
            imgPost: require('../../assets/imgs/7eaf71b50ee7d7c1213d19f7b3ccf6c1.jpg'),
            numLikes: 49
        },
        {
            id: '32',
            name: 'Felipe_CostaSK8',
            img: require('../../assets/imgs/0cb985260bb744dc0e1927f7e83b9bbf.jpg'),
            imgPost: require('../../assets/imgs/login.jpg'),
            numLikes: 58
        }
    ],
    refreshing: false
};

export default class Feed extends Component {

    state = {
        ...state
    }

    onRefresh = () => {
        this.setState({ refreshing: true, posts: state.posts });
        // Simulando uma requisição de rede
        setTimeout(() => {
            this.setState({ refreshing: false });
        }, 2000); // Atualiza após 2 segundos
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.topFeedLogo}>
                        <Text style={styles.fontLogo}>My Contructor</Text>
                    </View>
                    <View style={styles.topFeedIcons}>
                        <Pressable onPress={() => console.log('Comentar')}>
                            {({ pressed }) => (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <IconIonic
                                        name="heart-outline"
                                        size={25}
                                        color={pressed ? 'white' : 'black'}
                                    />
                                </View>
                            )}
                        </Pressable>
                        <Pressable onPress={() => console.log('Comentar')}>
                            {({ pressed }) => (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <IconIonic
                                        name="chatbubbles-outline"
                                        size={25}
                                        color={pressed ? 'white' : 'black'}
                                    />
                                </View>
                            )}
                        </Pressable>
                    </View>
                </View>
                <View style={styles.postList}>
                    <FlatList
                        data={this.state.posts}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <Posts {...item} />}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this.onRefresh}
                            />
                        }
                        contentContainerStyle={styles.posts}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#A9A9A9',
        marginTop: 20,
    },
    fontLogo: {
        fontFamily: commonStyles.fontFamily.logo,
        fontSize: 30,
    },
    topFeedLogo: {
        flex: 7,
        marginLeft: 20,
    },
    topFeedIcons: {
        flex: 1,
        flexDirection: 'row',
        marginRight: 20,
        justifyContent: 'flex-end',
        gap: 20,
    },
    postList: {
        flex: 9,
        backgroundColor: '#1C1C1C',
    },
    posts: {
        marginHorizontal: 15,
        marginTop: 5,
    },
});