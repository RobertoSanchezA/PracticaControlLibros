import React from 'react'
import{useState} from 'react'
import {
    Button,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import EditButton from '../components/EditButton'

const Book = ({ list, onDelete, onEdit, addMode, showEditModal  }) => {
    {/* 
        props:
        item data and del/edit functions
        addMode to show modal 
    */}
    
    return (
        <View style={styles.container}>
            <View style={styles.bookCont}>
                <Text style={styles.bookItem}>Titulo del libro: {list.value}</Text>
                <Text style={styles.bookItem}>Numero de páginas: {list.pages}</Text>
                <Text style={styles.bookItem}>Porcentaje leído: {list.percentage}</Text>
            </View>

            <View style={styles.buttons}>
                <Button title="Editar" onPress={() => showEditModal(true)} />
                <Button title="Borrar" onPress={onDelete}></Button>
                <EditButton list={list} onEdit={onEdit} addMode={addMode} onDelete={onDelete} />
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
        borderWidth: 1,
        borderColor: 'black'
    }, 
    bookCont: { 
        marginVertical: 2,
        flexDirection: 'column',
    },
    bookItem: {
        fontSize: 19,
        color: '#000',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    pages: {
        color: '#000'
    },
    buttons:{
        justifyContent: 'space-between',
    }

})

export default Book;