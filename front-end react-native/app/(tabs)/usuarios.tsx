import { Image, StyleSheet, Platform,Text,FlatList, View } from 'react-native';

import Usuarios from '@/constants/usuario';




export default function Home()
{
  return (
    <View style={styles.container}> 
    <Text style={styles.title}> Perfis de Clientes </Text>
    <FlatList
      data= {Usuarios()}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text> id {item.id}</Text>
          <Text> nome {item.nome}</Text>
          <Text> nome no grupo{item.nomeGrupo}</Text>
          </View>
      )}
    />
  </View>
  )
}

const styles = StyleSheet.create(
  {
    container:
    {
      flex:1, 
      padding:20,
      backgroundColor: '#f8f8f8',
    },
    title:
    {
      fontSize: 22, 
      fontWeight: 'bold',
      marginBottom: 10
    },
    card: {
      backgroundColor: 'white',
      padding: 15,
      marginVertical: 8,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    nome: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
