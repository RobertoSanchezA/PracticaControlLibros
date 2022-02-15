import React from 'react'
import {
    Button,
    View,
    StyleSheet
} from 'react-native';

const Navigation = () => {
    return (
        <View style={styles.addButton}>
            <Button title="Agregar libro" />
        </View>
    )
}

const styles = StyleSheet.create({
    addButton: {
        
        borderBottomColor: "black",
        borderBottomWidth: 1,
        borderRadius: 3
    }
})

export default Navigation