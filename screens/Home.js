import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Title from '../components/title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={require('../assets/Exams-bro.png')}
          style={styles.image}
          resizeMode="center"
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
          <Text>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  bannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    padding: 24,
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
});
