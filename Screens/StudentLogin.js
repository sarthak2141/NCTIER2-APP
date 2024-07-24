import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image ,ScrollView, Dimensions,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const screenWidth=Dimensions.get('window')
const StudentLoginScreen = ({navigation}) => {
  return (

<ScrollView   showsVerticalScrollIndicator={false}
     style={{flex:1,width:screenWidth, backgroundColor:"#ffffff",marginTop:22}}>
       <View style={{marginTop:22 ,marginLeft:12}} >
        <TouchableOpacity style={{width:45, }} onPress={()=>navigation.goBack()}>
        <Icon name='arrow-back' size={32} style={{color:'black', padding:4, fontWeight:"600"}}/>
        </TouchableOpacity>
        
          
        </View>
        
      






    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Images/loginlogo.png')} 
          style={styles.image}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>STUDENT LOGIN</Text>
        <TextInput style={styles.inputfield} placeholder="USER NAME" />
        <TextInput style={styles.inputfield} placeholder="PASSWORD" secureTextEntry />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgetButton}>
          <Text style={styles.forgetButtonText}>FORGET PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 300, 
    height: 300, 
    resizeMode: 'contain',
    alignItems:'center'
  },
  formContainer: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputfield: {
    width:300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  loginButton: {
    backgroundColor: '#00c6ff', // Adjust the color as needed
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgetButton: {
    backgroundColor: '#ffc107', // Adjust the color as needed
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  forgetButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default StudentLoginScreen;