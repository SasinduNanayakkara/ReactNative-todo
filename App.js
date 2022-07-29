import {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {
  const [enteredText, setEnteredText] = useState('');
  const [todo, setTodo] = useState([]);

  const todoInputHandler = (text) => {
    setEnteredText(text);
  }
  const addTodoHandler = () => {
    setTodo((currentTodo) => [
      ...currentTodo,
      enteredText
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder='Enter ToDo' onChangeText={todoInputHandler} />
        <Button title='Add ToDo' onPress={addTodoHandler} />
      </View>
      <View style={styles.todoContainer}>
      <ScrollView >
        {todo.map((todoItem) => 
          <View style={styles.todoItem} key={todoItem}>
            <Text style={styles.todoText}  >{todoItem}</Text>
          </View>
        )}
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  todoContainer: {
    flex: 5,
  },
  todoItem: {
    margin: 8,
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#5e0acc"
  },
  todoText: {
    color: "white",
  }
});
