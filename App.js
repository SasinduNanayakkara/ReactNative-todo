import {useState} from "react"
import { StyleSheet, View, FlatList, Button } from 'react-native';
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import { StatusBar } from "expo-status-bar";
export default function App() {
  
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [todo, setTodo] = useState([]);

  const startAddTodo = () => {
    setModalIsVisible(true);
  }

  const endAddTodo = () => {
    setModalIsVisible(false);
  }

  const addTodoHandler = (enteredText) => {
    setTodo((currentTodo) => [
      ...currentTodo,
      {text: enteredText, id: Math.random().toString()},
    ]);
    endAddTodo();
  }

  const DeleteTodoHandler = (id) => {
    setTodo((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add Todo" color="#5e0acc" onPress={startAddTodo} />
        <TodoInput 
          onAddHandler={addTodoHandler} 
          onCancel={endAddTodo} 
          visible={modalIsVisible} 
        />
        <View style={styles.todoContainer}>
        <FlatList data={todo} renderItem={(itemData) => {
          return (
            <TodoItem 
              text={itemData.item.text} 
              id={itemData.item.id}
              onDeleteItem={DeleteTodoHandler}
              />
          )
        }} keyExtractor={(item, index) => {
          return item.id;
        }}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },

  todoContainer: {
    flex: 5,
  },

});
