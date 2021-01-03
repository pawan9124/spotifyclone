import React from 'react'
import {Text,View,Image, TouchableWithoutFeedback} from 'react-native';
import style from './style';
import {AlbumTypes} from '../../types';
import { useNavigation } from '@react-navigation/native';
export type AlbumProps = {
    album:AlbumTypes
}
function Album(props:AlbumProps) {
    console.log("PROPS",props)
    const navigation = useNavigation();

    const handleOnPress = ()=>{
        navigation.navigate('AlbumScreen',{id:props.album.id})
    }
    return (
        <TouchableWithoutFeedback onPress={handleOnPress}>
        <View style={style.container}>
            <Image style={style.image} source={{uri:props.album.imageUri}}/>
            <Text style={style.text}>{props.album.artistHeadline}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default Album
