import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import axios from 'axios';

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fazer uma solicitação GET à API para obter os dados dos países
    axios.get('https://restcountries.com/v3.1/name/')
      .then((response) => {
        const countryData = response.data;
        setCountries(countryData);
      })
      .catch((error) => {
        console.error('Erro ao obter dados dos países:', error);
      });
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', margin: 10 }}>
        Lista de Países
      </Text>
      <FlatList
        data={countries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
            <Image
              source={{ uri: item.flags.png }}
              style={{ width: 50, height: 30, marginRight: 10 }}
            />
            <View>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name.common}</Text>
              <Text>Capital: {item.capital.join(', ')}</Text>
              <Text>População: {item.population}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
