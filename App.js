import { useState } from "react"
import { View , Text, StyleSheet,TextInput, Button,FlatList,Modal } from "react-native"
import uuid from 'react-native-uuid'
//import ModalDelete from "./src/components/ModalDelete"

export default function App() {
  
  const [newStudentName,setNewStudentName] = useState("")
  const [newMarkPercent,setNewMarkPercent] = useState("")
  const [marks,setMarks] = useState([])
  const [productSelected,setProductSelected] = useState({})
  const [modalVisible,setModalVisible] = useState(false) 

  const handlerAddProduct = () => {
      const newProduct = {
        id:uuid.v4(),
        title:newStudentName,
        price:newMarkPercent,
      }
      setMarks(current => [...current,newProduct] )
      setNewStudentName("")
      setNewMarkPercent("")
  }

  const handlerModal = (item) => {
      setProductSelected(item)
      setModalVisible(true)
  }
  const handlerDeleteProduct = () => {
    setMarks(current => current.filter(product => product.id !== productSelected.id))
    setModalVisible(false)
  }
    return (
      <View  style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input}
        placeholder="Estudiante"
        value={newStudentName}
        onChangeText={(t)=> setNewStudentName(t)}
        />
        <TextInput 
        style={styles.input}
        placeholder="Nota %"
        value={newMarkPercent}
        onChangeText={(t)=> setNewMarkPercent(t)}
        />
        <Button title="ADD" onPress={handlerAddProduct} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={marks}
          keyExtractor={item => item.id}
          renderItem={({item})=> <View style={styles.cardProduct}>
                                    <Text style={styles.cardTitle}>{item.title}</Text>
                                    <Text>{item.price} %</Text>
                                    <Button title="DEL" onPress={() => handlerModal(item)}/>
                                    </View> }
        />
      </View>
      
</View>

    )}


    const styles = StyleSheet.create({
      container:{
        flex:1,
        backgroundColor: 'pink',
        justifyContent:"start",
        alignItems:"center",
        marginTop:25,
      },
      inputContainer:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        justifyContent:"space-around"
      },
      input:{
        borderWidth:4,
        paddingHorizontal:10,
        paddingVertical:5,
        width:150
      },
      listContainer : {
  
        width:"100%"
      },
      cardProduct:{
  
        flexDirection:"row",
        padding:10,
        margin:10,
        justifyContent:"space-around",
        alignItems:"center",
        borderWidth:4
      },
      
    });
