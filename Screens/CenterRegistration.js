import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert,ScrollView, Dimensions,TouchableOpacity,Image ,StatusBar, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const screenWidth=Dimensions.get('window')
const CenterRegistrationScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const generateOtp = () => {
    // Logic to generate OTP
    Alert.alert('OTP Generated', 'Your OTP is 123456'); 
  };

  const submitCode = () => {
    // Logic to submit the entered code
    Alert.alert('Code Submitted', `You entered: ${otp}`); // Replace with actual submission logic
  };

  return (

<ScrollView   showsVerticalScrollIndicator={false}
     style={{flex:1,width:screenWidth, backgroundColor:"#ffffff",marginTop:22}}>
      <SafeAreaView>
       <StatusBar backgroundColor='grey' barStyle="dark-content"/>
        <View style={{marginTop:22,marginLeft:12}} >
        <TouchableOpacity style={{width:45, }} onPress={()=>navigation.goBack()}>
        <Icon name='arrow-back' size={32} style={{color:'black', padding:4, fontWeight:"600"}}/>
        </TouchableOpacity>
        
          
        </View>
        <View style={{alignItems:'center'}}>
            <Image  source={require('../assets/Images/logo2.png')} style={styles.logoImg}/>
          </View>

          <View style={{flex:1,alignItems:"center",marginTop:12 }}>
        <Text style={styles.studentsTxt} >NEW CENTER REGISTRATION</Text>
        </View>
      


    <View style={styles.container}>
      <Text style={styles.headerText}>Please enter the code you received</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />


        




        <TouchableOpacity style={{backgroundColor:"#00c6ff", paddingVertical:8,paddingHorizontal:7,borderRadius:17,left:13}}>
                <Text style={{fontSize:16,color:'white',fontWeight:"600"}} >
                Generate OTP
                </Text>
            </TouchableOpacity>
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="Enter Code"
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
      />
      
      


      <View style={styles.submitContainer}>
            <TouchableOpacity style={{backgroundColor:"#228B22", paddingVertical:8,paddingHorizontal:27,borderRadius:20}}>
                <Text style={{fontSize:20,color:'white',fontWeight:"500"}} >
                    Submit
                </Text>
            </TouchableOpacity>
        </View>

    </View>
    
</SafeAreaView>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8ecffe',
    padding: 33,
    borderRadius:12,
    margin:14,
    elevation:5,
        shadowColor:"black",
      
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    
    flex: 1,
    backgroundColor:'#fffff'
  },
  logoImg:{
    width:190,
    height:190
  }
  ,
  submitContainer:{
   marginVertical:12

  },
  studentsTxt:{
   
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    },

    c:{
        backgroundColor:'#8ecffe',
        paddingVertical:17,
        margin:11,
        borderRadius:12,
        elevation:5,
        shadowColor:"black",
        bottom:9
        },
});

export default CenterRegistrationScreen;