// Imports packages
import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { generate } from 'shortid';

// Import Components.
import ColorButton from './components/ColorButton';
import ColorForm from './components/ColorForm';

// function and Custom hook.
const useColors = () => {
  const [colors, setColors] = useState([]);
  const addColor = color => {
    const newColor = { id: generate(), color }
    setColors([newColor, ...colors]);
  };
  return { colors, addColor };
}


// Exports
export default function App() {

  // Hooks
  const [backgroundColor, setBackgroundColor] = useState('grey');
  const { colors, addColor } = useColors();

  return (
    <>
      <ColorForm
        onNewColor={addColor}
      />

      <FlatList
        style={[styles.container, { backgroundColor }]}
        data={colors}
        renderItem={({ item }) => {
          return (
            <ColorButton
              key={item.id}
              backgroundColor={item.color}
              onPress={setBackgroundColor}
            />
          );
        }}
      />
    </>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex'
  }
});
