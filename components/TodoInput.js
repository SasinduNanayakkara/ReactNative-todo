import {useState} from "react"
import  {StyleSheet, TextInput, View, Button, Modal, Image} from "react-native"
const TodoInput = (props) => {
    const [enteredText, setEnteredText] = useState('');
    const todoInputHandler = (text) => {
        setEnteredText(text);
      }

      const addTodoHandler = () => {
        props.onAddHandler(enteredText);
        setEnteredText('');
      }
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          {/* <Image
            style={styles.image}
            source={require("../assets/todo.png")}
          /> */}
          <TextInput 
            style={styles.TextInput} 
            placeholder='Enter ToDo' 
            onChangeText={todoInputHandler}
            value={enteredText}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title='Cancel' onPress={props.onCancel} color="#f31282" />
              </View>
              <View style={styles.button}>
                <Button title='Add ToDo' onPress={addTodoHandler} color="#b180f0" />
              </View>
            </View>
        </View>
      </Modal>
    )
}

export default TodoInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        padding: 16,
        borderBottomColor: '#ccc',
        backgroundColor: "#311b6b",
      },
      TextInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: "#120438",
        width: '100%',
        borderRadius: 6,
        marginRight: 8,
        padding: 16,
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
      },
      button: {
        width: 100,
        marginHorizontal: 8,
      },
      image: {
        width: '100',
        height: '100',
        margin: 20,
      }
})