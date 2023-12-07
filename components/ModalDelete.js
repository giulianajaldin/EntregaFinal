import {Modal, View, Text, Button} from "react-native"

const ModalDelete = ({product}) =>{

    return <Modal
             visible={modalVisible}
             >   
               <View style={styles.modalContainer}>
                 <View style={styles.modalContent}>
                   <Text style={styles.modalText}>¿esta seguro que quiere borrar?</Text>
                   <Text style={styles.modalText}>{product.title}</Text>
                   <Button title="Confirmo" onPress={handlerDeleteProduct} />
                   <Button title="Cerrar" onPress={()=>setModalVisible(false)}/>
                 </View>
               </View>
             </Modal>
}
const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
      },
      modalContent:{
        width:"80%",
        borderWidth:2,
        padding:10,
        gap:10
      },
      modalText:{
        textAlign:"center"
      }
})
export default ModalDelete