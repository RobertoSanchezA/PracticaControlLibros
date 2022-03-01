import { React, useState } from 'react';

import {
    Button,
    Text,
    TextInput,
    Modal,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const EditButton = ({ addMode, list, onEdit, onDelete }) => {

    const [bookName, setName] = useState(list.value)
    const [totalPages, setTotalPages] = useState(list.pages)
    const [percentage, setPercentage] = useState(list.percentage)

    const handleBookName = (bookName) => {
        setName(bookName)
    }

    const handleBookPages = (bookPages) => {
        setTotalPages(bookPages)
    }

    const handlePercentage = (bookPercentage) => {
        setPercentage(bookPercentage)
    }

    const validateNewData = () => {
        onEdit(list.bookKey, bookName, totalPages, percentage)
        onDelete(list.bookKey)
    }


    return (

        <Modal visible={addMode} animationType={'slide'}>
            <View>
                <View style={styles.bookCont}>
                    <Text style={styles.bookItem}>Datos del libro</Text>
                    <Text style={styles.bookItem}>Titulo del libro: {list.value} </Text>
                    <Text style={styles.bookItem}>Numero de páginas: {list.pages}</Text>
                    <Text style={styles.bookItem}>Porcentaje leído: {list.percentage}</Text>
                </View>
                <View style={styles.inputCont}>
                    <TextInput
                        style={styles.input}
                        name="title"
                        placeholder={list.value}
                        value={bookName}
                        onChangeText={handleBookName}
                    />
                    <TextInput
                        style={styles.input}
                        name="pages"
                        placeholder={list.pages}
                        value={totalPages}
                        onChangeText={handleBookPages}
                    />
                    <TextInput
                        style={styles.input}
                        name="percentage"
                        placeholder={list.percentage}
                        value={percentage}
                        onChangeText={handlePercentage}
                    />
                </View>

                <View style={styles.button}>
                    <Button title="Editar" onPress={validateNewData} />
                    <Button title="Cancelar" />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    bookItem: {
        color: 'black'
    },
    bookCont: {
        borderColor: 'black',
        borderWidth: 1,
    },
    inputCont: {
        borderColor: 'black',
        borderWidth: 1,
    },
    input: {
        color: 'black',
    }
})


export default EditButton