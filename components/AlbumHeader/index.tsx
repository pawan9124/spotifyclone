import React from 'react';
import {Text,View,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import albumCategories from '../../data/albumCategories';
import { AlbumTypes } from '../../types';
import style from './style';

export type AlbumHeaderProps = {
    album:AlbumTypes;
}

function AlbumHeader(props:AlbumHeaderProps) {
    console.log("album",props)
    const {album }= props;
    return (
        <View style={style.container}>
        <Image source={{uri:album.imageUri}} style={style.image}/>
        <Text style={style.name}>{album.name}</Text>
        <View style={style.creatorContainer}>
            <Text style={style.creator}>By {album.by}</Text>
            <Text style={style.likes}>{album.numberOfLikes} Likes</Text>
        </View>
        {/* Play Button */}
        <TouchableOpacity>
            <View style={style.button}>
                <Text style={style.buttonText}>PLAY</Text>
            </View>
        </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader;
