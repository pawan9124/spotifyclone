import * as React from 'react';
import { StyleSheet ,Text
,View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AlbumCategory from '../components/AblumCategory';
import albumCategoryData from '../data/albumCategories';

const album = {
  id:'1',
  title:'Pop Song',
  albums:[{
 id:'1',
  imageUri:"https://www.creativeboom.com/uploads/articles/b0/b0534000a3b85e1fce72d25c84d2d9f4a8f5f45b_1620.jpg",
  artistHeadline:"Taylor Swift, Cardi B, Getaing"
  },{
 id:'2',
  imageUri:"https://images.template.net/wp-content/uploads/2016/05/17050744/DJ-Album-Cover-Template-Sample.jpg",
  artistHeadline:"DJ Verra, Nerria B, MS Drak"
  },{
 id:'3',
  imageUri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4qlJ50RMk7OKZDke1eQMiJUqKYDvtEzl1Q&usqp=CAU",
  artistHeadline:"BOB MArye, Nerria B, MS Drak"
  }]
 
}


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
      data={albumCategoryData}
      renderItem={({item})=> <AlbumCategory title={item.title} albums={item.albums} id={item.id}/>}
      keyExtractor={(item)=>item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
