import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList, Image } from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons'


const Home = () => {

  const [background, setBackground] = useState({
    uri: 'https://i.pinimg.com/originals/92/c8/e0/92c8e00b34fcfdeaf605a0647c21adb3.jpg',
    name: 'Avengers: End Game',
    stat: '2019 ‧ Action/Sci-fi ‧ 3h 2m',
    desc: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.'
  })

  const [gallery, setgallery] = useState([
    { 
       image: 'https://www.joblo.com/assets/images/joblo/posters/2020/03/no_time_to_die_poster7.jpg',
       title: 'No Time to Die',
       released: '2020 ‧ Thriller/Adventure ‧ 2h 43m',
       desc: 'Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, whos armed with a dangerous new technology.',
       key: '1' 
    },
    { 
      image: 'https://www.joblo.com/assets/images/joblo/posters/2020/03/2EF9FAE7-B888-4DBA-868D-B4E289BAE769.jpeg',
      title: 'Black Widow',
      released: '2020 ‧ Action/Adventure',
      desc: 'A film about Natasha Romanoff in her quests between the films Civil War and Infinity War.',
      key: '2' 
    },
    { 
      image: 'https://www.joblo.com/assets/images/joblo/posters/2020/01/Fast--Furious-9-Han-poster.jpg',
      title: 'F9',
      released: '2021 ‧ Action/Adventure ‧ 2h 15m',
      desc: 'Cypher enlists the help of Jakob, Doms younger brother to take revenge on Dom and his team.',
      key: '3' 
    },
    { 
      image: 'https://www.joblo.com/assets/images/joblo/posters/2019/12/wonder-woman84.jpg',
      title: 'Wonder Woman 1984',
      released: '2020 ‧ Action/Adventure',
      desc: 'Wonder Woman squares off against the Cheetah, a villainess who possesses superhuman strength and agility.',
      key: '4' 
    },
    { 
      image: 'https://www.joblo.com/assets/images/joblo/posters/2020/06/peninsulaposter1.jpg',
      title: 'Peninsula',
      released: '2020 ‧ Horror/Adventure ‧ 1h 56m',
      desc: 'A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.',
      key: '5' 
    }
  ]);

  const [list, setList] = useState([
    {
      image: 'https://www.joblo.com/assets/images/joblo/posters/2020/02/monster_hunter_xlg.jpg',
      key: '1'
    },
    {
      image: 'https://www.joblo.com/assets/images/joblo/posters/2020/03/tenet-poster.jpg',
      key: '2'
    },
    {
      image: 'https://www.joblo.com/assets/images/joblo/posters/2020/03/071E65B1-849B-4CA6-89DE-EBC9EA85263A.jpeg',
      key: '3'
    },
    {
      image: 'https://www.joblo.com/assets/images/joblo/posters/2020/02/The-New-Mutants-poster-3.jpg',
      key: '4'
    },
    {
      image: 'https://www.joblo.com/assets/images/joblo/posters/2019/12/afterlifeposterecto.jpg',
      key: '5'
    },
  ])

  const carouselRef = useRef(null);

  const {width, height} = Dimensions.get('window');

  const renderItem = ({item, index}) =>{
    return(
      <View>
        <TouchableOpacity 
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
          setBackground({
            uri: item.image,
            name: item.title,
            stat: item.released,
            desc: item.desc
          })
        }}
        >
          <Image source={{ uri: item.image }} style={styles.carouselImage} />
          <Text style={styles.carouselText}>{item.title}</Text>
          <MaterialIcons name='library-add' size={30} color='white' style={styles.carouselIcon}/>
        </TouchableOpacity>
      </View>
    )
  }

    return (
        <ScrollView style={{ backgroundColor: '#000' }}>
          <View style={styles.carouselContentContainer}>
            <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
              <ImageBackground
              source={{ uri: background.uri }}
              style={styles.ImageBg}
              blurRadius={30}
              >
                <View style={styles.searchBoxContainer}>
                  <TextInput placeholder='Search Movies' placeholderTextColor='#666' style={styles.searchBox} />
                  <Feather name='search' size={22} color='#666' style={styles.searchBoxIcon} />
                </View>

                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginVertical: 10 }}>Top Picks this week</Text>
                <View style={styles.carouselContainerView}>
                  <Carousel 
                  style={styles.Carousel} 
                  data={gallery} 
                  renderItem={renderItem} 
                  itemWidth={200} 
                  containerWidth={ width - 20 } 
                  separatorWidth={0} 
                  ref={carouselRef} 
                  inActiveOpacity={0.4}
                  />
                </View>

                <View style={styles.movieInfoContainer}>
                  <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.movieName}>{background.name}</Text>
                    <Text style={styles.movieStat}>{background.stat}</Text>
                  </View>
                  <TouchableOpacity style={styles.playIconContainer}>
                    <FontAwesome5 name='play' size={22} color='#02ad94' style={{ marginLeft: 4 }} />
                  </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
                  <Text style={{ color: 'white', opacity: 0.8, lineHeight: 20 }}>{background.desc}</Text>
                </View>
              </ImageBackground>
            </View>
          </View>

          <View style={{ marginHorizontal: 14 }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Continue Watching</Text>
            <ImageBackground source={{ uri: 'https://www.joblo.com/assets/images/joblo/posters/2020/03/spongebob-movie-2.jpg' }} style={{ height: 250, width: '100%', backgroundColor: '#000' }} resizeMode='cover'>
              <Text style={{ color: 'white', padding: 14, }}>The SpongeBob Movie: Sponge on the Run</Text>
              <TouchableOpacity style={{ ...styles.playIconContainer, position: 'absolute', top: '40%', right: '40%' }}>
                <FontAwesome5 name='play' size={22} color='#02ad94' style={{ marginLeft: 4 }}/>
              </TouchableOpacity>
            </ImageBackground>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, marginTop: 36 }}>
              <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>My list</Text>
              <Text style={{ color: 'white', fontSize: 14, fontWeight: 'normal' }}>View All</Text>
            </View>

            <FlatList style={{ marginBottom: 30 }} 
            data={list}
            horizontal={true}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={{ marginRight: 20 }}>
                  <Image source={{ uri: item.image }} style={{ height: 300, width: 200 }}/>
                  <View style={{ position: 'absolute', height: 5, width: '100%', backgroundColor: '#02ad94', opacity: 0.8 }}></View>
                  <FontAwesome5 name='play' size={38} color='#fff' style={{ position: 'absolute', top: '45%', left: '45%', opacity: 0.9 }} />
                </TouchableOpacity>
              )
            }}
            />
          </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselContentContainer:{
    flex: 1,
    backgroundColor: '#000',
    height: 720,
    paddingHorizontal: 14
  },
  ImageBg:{
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: 'flex-start'
  },
  searchBoxContainer:{
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 4,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  searchBox:{
    padding: 12,
    paddingLeft: 20,
    fontSize: 16
  },
  searchBoxIcon:{
    position: 'absolute',
    right: 20,
    top:14
  },
  carouselContainerView:{
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Carousel:{
    flex: 1,
    overflow: 'visible'
  },
  carouselImage:{
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)'
  },
  carouselText:{
    padding: 14,
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  carouselIcon:{
    position: 'absolute',
    top: 15,
    right: 15
  },
  movieInfoContainer:{
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 14
  },
  movieName:{
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6
  },
  movieStat:{
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    opacity: 0.8
  }
});

export default Home;
