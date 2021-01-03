export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumScreen:undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type AlbumTypes = {
    id:string,
    imageUri:string,
    artistHeadline:string,
    name:string,
    by:string,
    numberOfLikes:number
        
}

export type Song = {
  id:string,
  imageUri:string,
  title:string,
  artist:string
}