import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Result = () => {
  return (
    <View>
      <View style={styles.bannerContainer}>
        <Image
          source={require('../assets/Exams-bro.png')}
          style={styles.image}
          resizeMode="center"
        />
      </View>
      <TouchableOpacity>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  bannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
