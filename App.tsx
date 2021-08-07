import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import {List} from './styles';

export default function App() {
  const {height} = useWindowDimensions();
  const absoluteTopPosition = 150;

  const db = [
    { id: "1", name: 'item 1'},
    { id: "2", name: 'item 2'},
    { id: "3", name: 'item 3'},
    { id: "4", name: 'item 4'},
    { id: "5", name: 'item 5'},
    { id: "6", name: 'item 6'},
    { id: "7", name: 'item 7'},
    { id: "8", name: 'item 8'},
    { id: "9", name: 'item 9'},
    { id: "10", name: 'item 10'},
    { id: "11", name: 'item 11'},
    { id: "12", name: 'item 12'},
    { id: "13", name: 'item 13'},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>HEADER</Text>
      </View>
      <View style={[styles.wrapper, {
        height: height - absoluteTopPosition,
        top: absoluteTopPosition,
      }]}>
        <Text style={styles.title}>Lista de items!</Text>
        <FlatList 
          data={db}
          keyExtractor={item => item.id}
          renderItem={({item}) => 
            <View style={styles.card}>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          }

        />
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3637a0',
    height: 200,

    alignItems: 'center',
  },
  headerText:{
    fontSize: 36,
  },
  wrapper: {
    width: '100%',
    // height: '100%', // colocando 80% todos items ficam visíveis 
    position: 'absolute',
    // marginTop: 150,

    backgroundColor: '#F0EDF5',

    paddingHorizontal: 24,
    
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  title:{
    fontSize: 28,
    marginVertical: 20,
  },
  card: {
    height: 60,
    backgroundColor: '#fff',
    fontSize: 24,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,

    justifyContent: 'center',
  },
  cardText: {
    fontSize: 24,
  }
});
