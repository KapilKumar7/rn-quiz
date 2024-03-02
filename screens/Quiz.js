import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = React.useState([]);
  const fetchQuestions = async () => {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple',
    );
    const data = await response.json();
    console.log(data.results);
    setQuestions(data.results);
  };
  useEffect(() => {
    fetchQuestions();
    // fetch questions from api
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.question}> Question : This is a question ?</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionsText}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionsText}>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionsText}>Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionsText}>Option 4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Result')}>
          <Text style={styles.buttonText}>End</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Result')}>
          <Text>End</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  options: {
    marginVertical: 20,
    flex: 1,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flex: 1,
  },
  button: {
    backgroundColor: '#2ec4b6',
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  optionsText: {
    fontSize: 18,
    marginVertical: 10,
  },
  optionButton: {
    backgroundColor: '#cbf3f0',
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    margin: 10,
  },
});
