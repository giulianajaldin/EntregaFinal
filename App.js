import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View  style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}/>
           <Button title="ADD" />
         </View>
         <View style={styles.listContainer}>
           <View style={styles.cardProduct}>
             <Text style={styles.cardTitle}>Coca Cola</Text>
             <Text>2200 $</Text>
             <Button title="DEL"/>
           </View>
           <View style={styles.cardProduct}>
             <Text style={styles.cardTitle}>Fideos</Text>
             <Text>1800 $</Text>
             <Button title="DEL"/>
           </View>
           <View style={styles.cardProduct}>
             <Text style={styles.cardTitle}>Fernet</Text>
             <Text>3200 $</Text>
             <Button title="DEL"/>
           </View> 
     </View>
    </View>
  );
  }

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"start",
    alignItems:"center",
    marginTop:50
  },
  inputContainer:{
    flexDirection:"row",
    alignSelf:"stretch",
    justifyContent:"space-around"
  },
  input:{
    borderWidth:4,
    paddingHorizontal:10,
    paddingVertical:5,
    width: 200
  },
  cardProduct: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 4,
  },
  listContainer: {
    width: "100%"
  },
});
