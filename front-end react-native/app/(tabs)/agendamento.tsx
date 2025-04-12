import { Image, StyleSheet, Platform,Text,FlatList, View } from 'react-native';

import Agendamentos from '@/constants/agendamento';




export default function Home()
{
  return (
    <View style={styles.container}> 
      <Text style={styles.title}> Tela de Agendamentos </Text>
      <FlatList
        data= {Agendamentos()}
        keyExtractor={(item) => item.id_Agenda.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome_cliente}</Text>
            <Text> id {item.id_Agenda}</Text>
            <Text> Data {item.Dia}</Text>
            <Text> Hora {item.hora}</Text>
            <Text> Cliente {item.nome_cliente}</Text>
            <Text> profissional {item.nome_funcionario}</Text>
            </View>
        )}
      />
    </View>
  );
};

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
