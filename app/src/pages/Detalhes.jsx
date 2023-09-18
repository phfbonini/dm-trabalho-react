import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

const Detalhes = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{ uri: item.thumbnail }}
        style={{ width: 150, height: 150, marginBottom: 10 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{item.title}</Text>
      <Text>Plataforma: {item.platform}</Text>
      <Text>Desenvolvedor: {item.developer}</Text>
      <Text>Descrição{item.short_description}</Text>
    </View>
  );
};

export default Detalhes;
