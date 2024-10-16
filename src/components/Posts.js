import React, { useRef } from "react";
import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'; // Use o pacote do Expo
import IconIonic from "react-native-vector-icons/Ionicons";
import { Image } from 'expo-image';

import commonStyles from "../commonStyles";

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    
export default (props) => {
    const scale = useRef(new Animated.Value(1)).current; // Valor inicial da escala

    const handlePressIn = () => {
        Animated.timing(scale, {
            toValue: 1.1, // Aumenta para 110%
            duration: 150,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.timing(scale, {
            toValue: 1, // Retorna ao tamanho original
            duration: 150,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.container}>
            <View style={styles.topPost}>
                <View style={styles.iconNameUser}>
                    <Pressable
                        onPress={() => console.log('Perfil Icon')}
                        onPressIn={handlePressIn} // Começo da animação ao pressionar
                        onPressOut={handlePressOut} // Fim da animação ao soltar
                    >
                        <Animated.View
                            style={{
                                transform: [{ scale }], // Aplica a transformação de escala
                            }}
                        >
                            <LinearGradient
                                colors={['#feda75', '#fa7e1e', '#d62976', '#962fbf', '#4f5bd5']}
                                style={styles.gradientCircle}
                            >
                                <View style={styles.iconUser}>
                                    <Image
                                        style={styles.image} // Certifique-se de que o estilo esteja definido
                                        source={props.img}
                                        placeholder={{ blurhash }}
                                        contentFit="cover"
                                        transition={1000}
                                    />

                                </View>
                            </LinearGradient>
                        </Animated.View>
                    </Pressable>
                    <View style={styles.nameUser}>
                        <Pressable
                            onPress={() => console.log('Meu Perfil')}
                        >
                            {({ pressed }) => (
                                <Text style={[styles.fontUserName, { color: pressed ? 'white' : 'black' }]}>{props.name}</Text>
                            )}
                        </Pressable>

                    </View>
                </View>
                <View style={styles.threePoints}>
                    <Pressable
                        onPress={() => console.log('threePoints')}
                    >
                        {({ pressed }) => (
                            <IconIonic
                                name="ellipsis-horizontal"
                                size={30}
                                color={pressed ? 'white' : 'black'}
                            />
                        )}
                    </Pressable>
                </View>
            </View>
            <View>
                <Text>Texto da Postagem</Text>
            </View>
            <View style={styles.ImagePost}>
                <Image
                    style={styles.imagePost} // Certifique-se de que o estilo esteja definido
                    source={props.imgPost}
                    placeholder={{ blurhash }}
                    contentFit="cover"
                    transition={1000}
                />
            </View>
            <View style={styles.bottomPost}>
                <View style={styles.likesResults}>
                    <Text>{props.numLikes} Pessoas que curtiram</Text>
                </View>
                <View style={styles.boxIconsBottom}>
                    <View style={styles.iconsBottom}>
                        <Pressable
                            onPress={() => console.log('Gostei')}
                        >
                            {({ pressed }) => (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <IconIonic
                                        name="heart-circle-outline"
                                        size={25}
                                        color={pressed ? 'white' : 'black'}
                                    />
                                    <Text style={[styles.descriptionICons, { color: pressed ? 'white' : 'black' }]}>Gostei</Text>
                                </View>
                            )}
                        </Pressable>

                    </View>
                    <View style={styles.iconsBottom}>
                        <Pressable
                            onPress={() => console.log('Comentar')}
                        >
                            {({ pressed }) => (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <IconIonic
                                        name="chatbubble-outline"
                                        size={25}
                                        color={pressed ? 'white' : 'black'}
                                    />
                                    <Text style={[styles.descriptionICons, { color: pressed ? 'white' : 'black' }]}>Comentar</Text>
                                </View>
                            )}
                        </Pressable>
                    </View>
                    <View style={styles.iconsBottom}>
                        <Pressable
                            onPress={() => console.log('Compartilhar')}
                        >
                            {({ pressed }) => (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <IconIonic
                                        name="arrow-redo-outline"
                                        size={25}
                                        color={pressed ? 'white' : 'black'}
                                    />
                                    <Text style={[styles.descriptionICons, { color: pressed ? 'white' : 'black' }]}>Compartilhar</Text>
                                </View>
                            )}
                        </Pressable>
                    </View>
                    <View style={styles.iconsBottom}>
                        <Pressable
                            onPress={() => console.log('Salvar')}
                        >
                            {({ pressed }) => (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <IconIonic
                                        name="bookmark-outline"
                                        size={25}
                                        color={pressed ? 'white' : 'black'}
                                    />
                                    <Text style={[styles.descriptionICons, { color: pressed ? 'white' : 'black' }]}>Salvar</Text>
                                </View>
                            )}
                        </Pressable>
                    </View>

                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'pink',
        marginBottom: 10,
        backgroundColor: '#A9A9A9',
    },
    topPost: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    iconNameUser: {
        flex: 9,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
    },
    gradientCircle: {
        width: 50, // Largura do círculo gradiente
        height: 50, // Altura do círculo gradiente
        borderRadius: 35, // Metade do tamanho para criar o círculo
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconUser: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 45, // ou qualquer valor desejado
        height: 45, // ou qualquer valor desejado
        borderRadius: 30, // Se quiser que fique circular
    },
    nameUser: {
        padding: 15,
        justifyContent: 'center',
        flex: 5,
    },
    fontUserName: {
        fontFamily: commonStyles.fontFamily.titulos,
        fontSize: 15
    },
    threePoints: {
        flex: 1,
        marginEnd: 10
    },
    ImagePost: {
        height: 500,
    },
    imagePost: {
        flex: 1,
        width: '100%'
    },
    bottomPost: {
        height: 80,
    },
    likesResults: {
        padding: 3,
        marginLeft: 10
    },
    boxIconsBottom: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
        // paddingHorizontal: 15
    },
    iconsBottom: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionICons: {
        fontFamily: commonStyles.fontFamily.DescricaoIcons
    }
});

