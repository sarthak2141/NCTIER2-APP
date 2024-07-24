
import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import SelectPrograms from '../Components/SelectProgram';


 const screenWidth= Dimensions.get("window");
const StudentRegistrationScreen = ({navigation}) => {
  return (
    <ScrollView   showsVerticalScrollIndicator={false}
    
     style={{flex:1,width:screenWidth, backgroundColor:"#ffffff",marginTop:22}}>
      <StatusBar backgroundColor='grey' barStyle="dark-content"/>

      <View style={{marginTop:22,marginLeft:12}} >
        <TouchableOpacity style={{width:45, }} onPress={()=>navigation.goBack()}>
        <Icon name='arrow-back' size={32} style={{color:'black', padding:4, fontWeight:"600"}}/>
        </TouchableOpacity>
        
          
        </View>
        <View style={{alignItems:'center'}}>
            <Image  source={require('../assets/Images/logo2.png')} style={styles.logoImg}/>
          </View>

          <View style={{flex:1,alignItems:"center",marginTop:13 }}>
        <Text style={styles.studentsTxt} >STUDENT REGISTRATION</Text>
        </View>
      
      {/* REGISTRAION FORMS */}
      <View style={styles.container}>
        <View>
            <Text style={styles.studentTxt}>Name</Text>
            <TextInput placeholder='Enter Your Name' style={styles.studentInpfield}/>
        </View>
        <View>
            <Text style={styles.studentTxt}>Mobile</Text>
            <TextInput placeholder='Enter Your Mobile' style={styles.studentInpfield} keyboardType='phone-pad' />
        </View>
        <View>
            <Text style={styles.studentTxt}>Email</Text>
            <TextInput placeholder='Enter Your Email' style={styles.studentInpfield}/>
        </View>
        <View>
             <Text style={styles.studentTxt}>Select Program</Text>
             {/* <TextInput placeholder='Select Your Name'/>  */}
           <SelectPrograms/>
        </View>
        <View style={{alignItems:"center"}}>
       <TouchableOpacity>
        <Text style={{color:"#157347",textDecorationLine:"underline",fontSize:18,fontWeight:"500"}}>
        Application Form Fees
        </Text>
       </TouchableOpacity>
        </View>
        <View >
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:18}}>- CHOOSE INSTITUTE (OPTIONAL) -</Text>
            </View>

            <Text style={{marginTop:12, fontSize:17,
            fontWeight:"400",
            marginLeft:12,}}> Center Affiliation Code</Text>
            <View style={{flexDirection:'row'}}>

            
           
           
            <TextInput  style={{
                  backgroundColor:'#ffffff',
                  padding:8,
                  margin:12,
                  borderRadius:12,
                  width:'78%',
                  marginRight:0,
                  borderTopRightRadius:0,
                  borderBottomRightRadius:0,
            }}/>
          
                <TouchableOpacity style={{width:50,height:44,backgroundColor:"#ffc107",alignItems:'center',justifyContent:'center',marginTop:12,
                    borderTopRightRadius:12,
                    borderBottomRightRadius:12,
                    
                }}>
                    <Text style={{fontSize:21,fontWeight:"400"}}>
                        Go
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

        <View>
             <Text style={styles.studentTxt}>Select Center</Text>
             <TextInput placeholder='-Select Program-' style={styles.studentInpfield}/> 
            
        </View>
        <View style={styles.submitContainer}>
            <TouchableOpacity style={{backgroundColor:"#228B22", paddingVertical:8,paddingHorizontal:27,borderRadius:20}}>
                <Text style={{fontSize:20,color:'white',fontWeight:"500"}} >
                    Submit
                </Text>
            </TouchableOpacity>
        </View>

      </View>
    
    </ScrollView>
  )
}

export default StudentRegistrationScreen

const styles = StyleSheet.create({
    container:{
    backgroundColor:'#8ecffe',
    paddingVertical:17,
    margin:11,
    borderRadius:12,
    elevation:5,
    shadowColor:"black",
    bottom:9
    },
    studentsTxt:{
        // color:'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        },
        studentInpfield:{
      backgroundColor:'#ffffff',
      padding:8,
      margin:12,
      borderRadius:12
      
        }
        ,
        studentTxt:{
            fontSize:17,
            fontWeight:"400",
            marginLeft:12,
            
        },
        submitContainer:{
            justifyContent:'center',
            alignItems:'center'
        
          },
          logoImg:{
            width:190,
            height:190
          }

})
