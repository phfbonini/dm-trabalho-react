import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Detalhes = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.thumbnail }}
        style={styles.gameImage}
      />
      <Text style={styles.gameTitle}>{item.title}</Text>
      <Text>Plataforma: {item.platform}</Text>
      <Text>Desenvolvedor: {item.developer}</Text>
      <Text style={styles.gameDescription}>{item.short_description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Cor de fundo da tela
  },
  gameImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 75, // Bordas arredondadas para a imagem
  },
  gameTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF', // Cor do título do jogo
  },
  gameDescription: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#333', // Cor do texto da descrição
  },
});

export default Detalhes;
