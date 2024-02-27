import React,{useState} from 'react';
import {Text,TextInput,View,StyleSheet,TouchableOpacity,CheckBox} from 'react-native';

export default function Login({navigation}) {

 const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
       <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        placeholder="username"
        value={username}
        onChangeText={text => setUsername(text)}
        placeholderTextColor="gray"
      />
      </View>
       <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
        placeholderTextColor="gray"
      />
     </View>
<View style={styles.buttonContainer}>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={()=>navigation.navigate("Home")}>Giriş Yap</Text>
      </TouchableOpacity>

    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={()=>navigation.navigate("Signin")}>Kayıt ol</Text>        
     </TouchableOpacity>
    </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#1B1A55',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign:"center",
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    backgroundColor: '#9290C3',
     borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '80%',
    marginRight:"10px",
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  checkboxText: {
    color: 'white',
    marginLeft: 10,
  },
});
