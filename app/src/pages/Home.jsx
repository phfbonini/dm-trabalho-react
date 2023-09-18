import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import axios from 'axios';

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Fazer uma solicitação GET à API para obter os dados dos jogos gratuitos
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
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', margin: 10 }}>
        Lista de Jogos Gratuitos
      </Text>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
            <Image
              source={{ uri: item.thumbnail }}
              style={{ width: 50, height: 50, marginRight: 10 }}
            />
            <View>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
              <Text>Plataforma: {item.platform}</Text>
              <Text>Desenvolvedor: {item.developer}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
