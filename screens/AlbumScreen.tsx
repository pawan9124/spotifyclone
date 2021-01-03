import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {View,Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AlbumHeader from '../components/AlbumHeader';
import SongListItem from '../components/SongListItem';
import albumSongList from '../data/albumSongList';

function AlbumScreen() {
    const route = useRoute();
 
    useEffect(()=>{
        console.log("Route",route)
    },[])


    return (
        <View>
            
            <FlatList
                data={albumSongList.songs}
                renderItem={({item})=> <SongListItem song={item}/>}
                keyExtractor={(item)=>item.id}
                ListHeaderComponent={()=><AlbumHeader album={albumSongList}/>}
            />
        </View>
    )
}

export default AlbumScreen
