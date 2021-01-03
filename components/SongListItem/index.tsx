import React from 'react';
import {View,Text,Image} from 'react-native';
import { Song } from '../../types';
import style from './style';
import { Entypo } from '@expo/vector-icons';

export type SongListItemProps = {
    song:Song
}

function SongListItem(props:SongListItemProps) {
    const {song} = props;
    return (
        <View style={style.container}>
            <Image source={{uri:song.imageUri}} style={style.image}/>
            <View style={style.rightContainer}>
            <Text style={style.title}>{song.title}</Text>
            <Text style={style.artist}>{song.artist}</Text>
            </View>
            <View style={style.optionContainer}>
           <Entypo name="dots-three-vertical" size={16} color="white" style={style.options} />
           </View>
        </View>
    )
}

export default SongListItem
