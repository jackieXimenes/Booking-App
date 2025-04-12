import { Image, StyleSheet, Platform,Text,FlatList, View, Pressable } from 'react-native';

import Usuarios from '@/constants/usuario';
import { Link } from 'expo-router';




export default function Home()
{
  return (
    <View style={styles.container}> 
      <Link href="/usuarios" asChild>
        <Pressable>
            <Text style={[styles.btn, {padding: 5}]}>Lista de usuários</Text>
        </Pressable>
      </Link>
  
      <Link href="/agendamento" asChild>
      <Pressable>
          <Text style={[styles.btn, {padding: 5}]}>Tela de Agendamentos</Text>
      </Pressable>
      </Link>

      <Link href="/servico" asChild>
        <Pressable>
            <Text style={[styles.btn, {padding: 5}]}>Produtos & Serviços</Text>
        </Pressable>
     </Link>

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
    btn: {
      fontSize: 20,
      backgroundColor: "gray",
      borderRadius:20,
      fontWeight: 'bold',
      padding: 2,
      margin: 15,
      width: 300, 
      color:'white',
      textAlign: 'center',
    },
  });
