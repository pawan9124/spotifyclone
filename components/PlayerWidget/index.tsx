import { AntDesign, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import {View,Text,Image} from 'react-native';
import { Song } from '../../types';
import style from './style';

const song = {
        id:"1",
        imageUri:"https://images.template.net/wp-content/uploads/2016/05/17050744/DJ-Album-Cover-Template-Sample.jpg",
        title:"High on you",
        artist:'Helen'
    }

function PlayerWidget() {
    return (
        <View style={style.container}>
            <Image source={{uri:song.imageUri}} style={style.image}/>
            <View style={style.rightContainer}>
            <View style={style.nameContainer}>
            <Text style={style.title}>{song.title} </Text>
            <Text style={style.artist}>{song.artist}</Text>
            </View>
            <View style={style.iconContainer}>
            <AntDesign name="hearto" size={25} color={"white"}/>
            <FontAwesome name="play" size={25} color={"white"}/>
            </View>
            </View>
        </View>
    )
}

export default PlayerWidget
