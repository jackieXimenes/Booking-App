import { Image, StyleSheet, Platform,text,FlatList, View } from 'react-native';

import { usuario } from '@/constants/usuario';

export default function HomeScreen() 
{
  return 
  (
    <View style={styles.container}> 
      <Text style={styles.title}> Perfis de Clientes </Text>
      <FlatList>
        data= usuario()
        keyExtractor={(item)} => item.id.toString()}
        renderItem=
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container:
    {
      flex:1, 
      padding:20,
      backgroundColor: '#f8f8f8',
    }
    title:
    {
      fontSize: 22, 
      fontWeigth: 'bold',
      marginBotton: 10
    }
  },);
