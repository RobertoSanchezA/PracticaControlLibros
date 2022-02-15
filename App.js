import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import Navigation from './components/Navigation'
import Book from './components/Book'
export default function App() {

  const [bookList, setBooksList] = useState([]);
  const [addBookView, setAddBookView] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.bookText}>Lista de libros</Text>
      <View style={styles.nav}>
        <Navigation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: 'orange',
    height: '100%'
  },
  bookText: {
    textAlign: 'center',
    marginTop: 50,
    color: 'white',
    fontSize: 16,
  },
  nav: {
    justifyContent: 'flex-end',
    flex: 1
  }

})