import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {TodoList} from './TodoList';
import {addTodo} from './todoSlice';

export const AddTodo = ({navigation}) => {
  const [text, setText] = useState();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodo(text));
    setText('');
  };

  const handleNavigation = () => {
    navigation.navigate('TodoList');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Todo"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button title="Add" onPress={handleSubmit} />

      <Button title="Navigation" onPress={handleNavigation} />

      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 2,
  },
  input: {
    backgroundColor: 'red',
    marginBottom: 8,
    padding: 8,
    height: 40,
  },
});
