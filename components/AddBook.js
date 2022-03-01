import React from 'react'
import { useState } from 'react'
import { Button, Modal, TextInput, View, StyleSheet } from 'react-native'
const AddBook = ({ handler, addMode }) => {

    const [bookName, setName] = useState('')
    const [totalPages, setTotalPages] = useState('')
    const [percentage, setPercentage] = useState('')

    const handleBookName = (bookName) => {
        setName(bookName)
    }

    const handleBookPages = (bookPages) => {
        setTotalPages(bookPages)
    }

    const handlePercentage = (bookPercentage) => {
        setPercentage(bookPercentage)
    }

    const validateBook = () => {
        handler(bookName, totalPages, percentage);
        console.log("se introduces bien los datos ->", bookName, totalPages, percentage)
        setName('')
        setTotalPages('')
        setPercentage('')
    }

    return (
        <Modal visible={addMode} animationType={'slide'} >
            <View style={styles.formGroup}>
                <TextInput
                    style={styles.input}
                    placeholder=" Titulo"
                    name="title"
                    value={bookName}
                    onChangeText={handleBookName}
                />
                <TextInput
                    style={styles.input}
                    name="pages"
                    value={totalPages}
                    placeholder=" Numero de paginas"
                    onChangeText={handleBookPages}
                />
                <TextInput
                    style={styles.input}
                    name="percentage"
                    value={percentage}
                    placeholder=" porcentaje leido"
                    onChangeText={handlePercentage}
                />
                <Button
                    title={"Agregar"}
                    onPress={validateBook}
                />
            </View>
        </Modal>

    )
}
const styles = StyleSheet.create({
    formGroup: {
        backgroundColor: 'grey',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        flex: 1,

    },
    input: {
        backgroundColor: 'white',
        width: '75%',
        borderWidth: 1,
        borderColor: "green",
        height: 40,
        margin: 15
    },

})
export default AddBook