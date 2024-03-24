import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Login = () => {
  const [count, setCount] = useState(0);

  const onIncreaseHandler = () => {
    console.log('Hello Increase', count);
    setCount(pre => pre + 1);
  };

  const onDecreaseHandler = () => {
    console.log('Hello Decrease', count);
    setCount(pre => pre - 1);
  };

  return (
    <View style={styles.container}>
      <Text>Count Numbers : {count}</Text>
      <View style={styles.incContainer}>
        <TouchableOpacity
          style={styles.btnContainer}
          activeOpacity={0.8}
          onPress={onIncreaseHandler}>
          <Text style={styles.title}>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnContainer}
          activeOpacity={0.8}
          onPress={onDecreaseHandler}>
          <Text style={styles.title}>Decrease</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  incContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 13,
    color: '#ffffff',
  },
  btnContainer: {
    marginTop: 50,
    width: '30%',
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#ff8800',
    shadowOffset: {width: 0, height: 8},
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
});

export default Login;
