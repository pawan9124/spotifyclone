import React from 'react'
import {View,Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AlbumTypes } from '../../types';
import Album from '../Album';
import style from './style';


export type AlbumCategoryProps = {
    id:string,
    title:string,
    albums:[AlbumTypes]

}

function AlbumCategory(props:AlbumCategoryProps) {
    return (
        <View style={style.container}>
            {/* Title */}
            <Text style={style.title}>{props.title}</Text>
            {/* Album list */}
            <FlatList
            data={props.albums}
            renderItem={({item})=><Album album={item}
            keyExtractor={(item)=>item.id}/>}
            horizontal
            />
        </View>
    )
}

export default AlbumCategory;
