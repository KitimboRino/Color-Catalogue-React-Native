// Imports packages
import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';

// Import Components.
import ColorButton from './ColorButton';
import ColorForm from './ColorForm';
import { useColors } from "../hooks";

// Exports
export default function ColorList({ navigation }) {

  // Hooks
  const { colors, addColor } = useColors();

  return (
    <>
      <ColorForm
        onNewColor={addColor}
      />

      <FlatList
        style={[styles.container]}
        data={colors}
        renderItem={({ item }) => {
          return (
            <ColorButton key={item.id} backgroundColor={item.color}
              onPress={() => navigation.navigate('Details', {color: item.color})}
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
