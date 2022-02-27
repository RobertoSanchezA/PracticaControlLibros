
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import Book from './components/Book'
import AddBook from './components/AddBook'
export default function App() {

  const [bookList, setBooksList] = useState([]);
  const [addBookView, setAddBookView] = useState(false);

  const addBookHandler = (bookName, pages, percentage) => {

    setBooksList((bookList) => [...bookList,
    {
      key: Math.random().toString(),
      value: bookName,
      pages: pages,
      percentage: percentage
    }
    ]);
    console.log(bookList)
    setAddBookView(false);
  }
  
  const deleteBookHandler = (bookKey) => {
    setBooksList((currentList) => {
      return currentList.filter((book) => book.key !== bookKey)
    })
  }

  return (

    <View style={styles.container}>
      <View >
        <Text style={styles.title}>Lista de libros</Text>
      </View>
      <AddBook handler={addBookHandler} addMode={addBookView} />
      <View>
        <FlatList data={bookList} renderItem={bookData => (

          <Book
            list={bookData.item}
            onDelete={() => deleteBookHandler(bookData.item.key)}
          />
        )}
        />
      </View>
      <View style={styles.button}>
        <Button title={"Agregar libro"} onPress={() => setAddBookView(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    height: '100%'
  },
  title: {
    borderColor: 'black',
    borderWidth: 2,
    color: 'black',
    alignItems: 'center',
    backgroundColor: '#66A3D9',
    padding: 30,
  },
  button: {
    justifyContent: 'flex-end',
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: '#66A3D9',
    flex:1
  },

})