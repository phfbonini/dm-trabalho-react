import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [games, setGames] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://www.freetogame.com/api/games')
      .then((response) => {
        const gameData = response.data;
        setGames(gameData);
      })
      .catch((error) => {
        console.error('Erro ao obter dados dos jogos:', error);
      });
  }, []);

  return (
    <View>
      <Text style={styles.headerText}>Lista de Jogos Gratuitos</Text>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detalhes', { item })}
          >
            <View style={styles.gameItem}>
              <Image
                source={{ uri: item.thumbnail }}
                style={styles.gameImage}
              />
              <View style={styles.gameInfo}>
                <Text style={styles.gameTitle}>{item.title}</Text>
                <Text>Plataforma: {item.platform}</Text>
                <Text>Desenvolvedor: {item.developer}</Text>
                {/* Adicione mais informações resumidas do item aqui */}
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
    color: '#333',
  },
  gameItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  gameImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  gameInfo: {
    flex: 1,
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

export default Home;
