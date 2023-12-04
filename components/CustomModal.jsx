import { View, Text, Modal,StyleSheet,Button } from 'react-native'

const CustomModal = (
    { 
        animationTypeProp,
        isVisibleProp,
        itemSelectedProp,
        onDeleteItemHandlerEvent,
        setModalVisibleEvent
    }
) => {
    return (
        <Modal animationType={animationTypeProp} visible={isVisibleProp}>
            <View style={styles.modalMessageContainer}>
                <Text>por si o por no: </Text>
                <Text>{itemSelectedProp.value}</Text>
            </View>
            <View style={styles.modalButtonContainer}>
                <Button title="Cancelar" color="#3a86ff" onPress={() => setModalVisibleEvent(!isVisibleProp)} />
                <Button title="afueraaa" color="#A80874" onPress={onDeleteItemHandlerEvent} />
            </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    modalMessageContainer: {
        marginTop: 50,
        alignItems: "center"
      },
      modalButtonContainer:{
        flexDirection:"row",
        justifyContent: "space-evenly",
        paddingTop: 20
      }
})