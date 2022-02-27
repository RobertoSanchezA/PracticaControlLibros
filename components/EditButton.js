import React from 'react'

import {
    Button,
    Text,
    Modal,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const EditButton = () => {
    return (
        
        <Modal>
            <View>
                <View style={styles.bookCont}>
                    <Text style={styles.bookItem}>Titulo del libro: {list.value}</Text>
                    <Text style={styles.bookItem}>Numero de páginas: {list.pages}</Text>
                    <Text style={styles.bookItem}>Porcentaje leído: {list.percentage}</Text>
                </View>
                <View style={styles.buttons}>
                    <Button title="Borrar" onPress={onDelete}></Button>
                    <Button title="Editar" onPress={() => setEditView(true)}></Button>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({

})
export default EditButton