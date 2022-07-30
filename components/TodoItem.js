import  {StyleSheet, View, Text, Pressable} from "react-native"

const TodoItem = (props) => {
    return (   
        <View style={styles.todoItem}>
            <Pressable android_ripple={{color: '#dddddd'}} onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.todoText}>{props.text}</Text>
        </Pressable>
        </View>
    );
}

export default TodoItem;

const styles = StyleSheet.create({
    todoItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#b180f0"
      },
      todoText: {
        color: "white",
        padding: 8,
      }
});