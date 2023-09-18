import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const DetalhesAgente = ({ route }) => {
  const { agent } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{ uri: agent.fullPortrait }}
          style={styles.agentImage}
        />
        <Text style={styles.agentName}>{agent.displayName}</Text>
        <Text style={styles.agentDescription}>{agent.description}</Text>
        <Text style={styles.sectionHeader}>Habilidades:</Text>
        {agent.abilities.map((ability, index) => (
          <View key={index} style={styles.abilityContainer}>
            <Image
              source={{ uri: ability.displayIcon }}
              style={styles.abilityImage}
            />
            <Text style={styles.abilityName}>{ability.displayName}</Text>
            <Text style={styles.abilityDescription}>{ability.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  agentImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  agentName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  agentDescription: {
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  abilityContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  abilityImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  abilityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  abilityDescription: {
    textAlign: 'center',
  },
});

export default DetalhesAgente;
