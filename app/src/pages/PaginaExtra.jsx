import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const PaginaExtra = () => {
  const [agents, setAgents] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://valorant-api.com/v1/agents')
      .then((response) => {
        const agentData = response.data.data;
        setAgents(agentData);
      })
      .catch((error) => {
        console.error('Erro ao obter dados dos agentes:', error);
      });
  }, []);

  return (
    <View>
      <Text style={styles.headerText}>Lista de Agentes Valorant</Text>
      <FlatList
        data={agents}
        keyExtractor={(item) => item.uuid}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('DetalhesAgente', { agent: item })}
          >
            <View style={styles.agentItem}>
              <Image
                source={{ uri: item.displayIcon }}
                style={styles.agentImage}
              />
              <View style={styles.agentInfo}>
                <Text style={styles.agentName}>{item.displayName}</Text>
                <Text>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#333', // Cor do texto
  },
  agentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white', // Cor de fundo do item
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007AFF', // Cor da borda
  },
  agentImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  agentInfo: {
    flex: 1,
  },
  agentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF', // Cor do nome do agente
  },
});

export default PaginaExtra;
