import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetalhesAgente = ({ route }) => {
  const { agent } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: agent.fullPortrait }}
        style={styles.agentImage}
      />
      <Text style={styles.agentName}>{agent.displayName}</Text>
      <Text style={styles.agentDescription}>{agent.description}</Text>
      {/* Adicione mais informações detalhadas do agente aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  agentImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  agentName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  agentDescription: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
});

export default DetalhesAgente;
