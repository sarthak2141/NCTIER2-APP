import { StyleSheet, View,Image ,Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from '@react-navigation/native';

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.Headercontainer}>
        <TouchableOpacity onPress={()=>(navigation.dispatch(DrawerActions.openDrawer()))} style={{marginLeft:3}}>
        <Icon name='menu' size={34} color={'#fff'} />
        </TouchableOpacity>
        <View style={styles.imgContainer}>
        <Text style={styles.headertxt}>
            N.C.E.T.I.R 
          </Text>
        <Image  source={require('../assets/Images/logo2.png')} style={styles.headerImg}/>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Headercontainer: {
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    flex: 1,
    marginHorizontal:7
  },
  container: {
    backgroundColor: '#1177ff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10, 
  },
  headerImg:{
    width:40,
    height:40,
    borderRadius:20,
    marginHorizontal: 4, 
  }
  ,
  headertxt: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '700',
    marginRight:5
  },
  imgContainer:{
    flexDirection:'row',
    alignItems:'center'
  }

});
