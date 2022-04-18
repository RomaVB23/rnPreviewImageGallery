import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  Dimensions,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const {width} = Dimensions.get('window');

const IMAGES = {
  image1: require('./assets/images/tt.jpg'),
  image2: require('./assets/images/2.jpeg'),
  image3: require('./assets/images/r.jpg'),
};

const App = () => {
  const carouselRef = useRef();
  const [images, setImages] = useState([
    {id: '1', image: IMAGES.image1},
    {id: '2', image: IMAGES.image2},
    {id: '3', image: IMAGES.image3},
  ]);
  const [indexSelected, setIndexSelected] = useState(0);

  const onSelect = (indexSelected) => {
    setIndexSelected(indexSelected);

   
    // flatListRef?.current?.scrollToOffset({
    //   offset: indexSelected * THUMB_SIZE,
    //   animated: true,
    // });
  };

  const onTouchThumbnail = (touched) => {
    if (touched === indexSelected) return;

    carouselRef?.current?.snapToItem(touched);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5', alignItems: 'center'}}>
      <View style={{flex: 1 / 3, marginTop: 20}}>
        <Carousel
          ref={carouselRef}
          layout="default"
          data={images}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={(index) => onSelect(index)}
          renderItem={({item, index}) => (
            <Image
              key={index}
              style={{width: '100%', height: '100%'}}
              resizeMode="contain"
              source={item.image}
            />
          )}
        />
        <Pagination
          inactiveDotColor="#F6F7F6"
          dotColor={'#CE2022'}
          activeDotIndex={indexSelected}
          dotsLength={images.length}
          animatedDuration={150}
          inactiveDotScale={1}
          dotStyle={{
            width: 70,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        />
      </View>
    </View>
  );
};

export default App;
