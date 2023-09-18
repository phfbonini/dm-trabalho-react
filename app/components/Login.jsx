import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    } else {
      // Lógica de login fictícia aqui
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      // Redirecionar para a página principal do aplicativo
      // Substitua esta linha pelo código de navegação apropriado
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Formulário de Login</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        style={{ width: 200, height: 40, borderWidth: 1, margin: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        style={{ width: 200, height: 40, borderWidth: 1, margin: 10, padding: 5 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
