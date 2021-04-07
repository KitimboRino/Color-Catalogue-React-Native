// Packages Imports
import React, { useState, useRef } from 'react';

// Components Imports
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';

// Exports
export default function ColorForm({ onNewColor = f => f }) {
  
  // Hooks
  const [inputValue, setValue] = useState('');
  const input = useRef();
  
  return (
    <View style={styles.container}>
      
      <TextInput
        ref={input}
        style={styles.txtInput}
        value={inputValue}
        onChangeText={text => setValue(text)}
        autoCapitalize='none'
        placeholder='Enter a color...'
      />

      <Button
        title='add'
        onPress={() => {
          input.current.blur();
          onNewColor(inputValue);
          setValue('');
        }}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },

  txtInput: {
    flex: 1,
    borderWidth: 2,
    fontSize: 20,
    margin: 5,
    borderRadius: 5,
    padding: 5
  }
});
