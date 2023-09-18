import React from 'react';
import { View } from 'react-native';
import Login from './src/pages/Login'; // Certifique-se de que o caminho esteja correto

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Login />
    </View>
  );
};

export default App;
