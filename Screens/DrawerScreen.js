import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DrawerData = [

  {  id:"01", label: "Home", icon: "home",navigationTo: 'HomeScreen'  },
    {id:"02", label: "Centers", icon: "location-on" },
    {id:"03", label: "Verification", icon: "verified" },
    {id:"04", label: "Programmes", icon: "school" },
    {id:"05", label: "Result", icon: "assessment" },
    {id:"06", label: "Latest Updates", icon: "update" },
    {id:"07", label: "Gallery", icon: "photo-library" },
    {id:"08", label: "Downloads", icon: "file-download" },
    {id:"09", label: "Contact", icon: "contacts" },
    {id:"10", label: "About Us", icon: "info" },











  // { id: "01", label: 'Home', icon: 'home', navigationTo: 'HomeScreen' },
  // { id: "02", label: 'Internship', icon: 'insert-drive-file', navigationTo: '' },
  // { id: "03", label: 'Part Time Job', icon: 'favorite', navigationTo: '' },
  // { id: "04", label: 'Career Advice', icon: 'chat', navigationTo: '' },
  // { id: "05", label: 'Resume', icon: 'person', navigationTo: '' },
  // { id: "06", label: 'Certification', icon: 'work', navigationTo: '' },
  // { id: "07", label: 'Free Seminar', icon: 'group', navigationTo: '' },
  // { id: "08", label: 'Premium Services', icon: 'description', navigationTo: '' },
  // { id: "09", label: 'LogOut', icon: 'power-settings-new', navigationTo: '' },
];

const DrawerScreen = ({ navigation }) => {
 

  const handlePressIn = (itemId) => {
    setHoveredItemId(itemId);
  };

  const handlePressOut = () => {
    setHoveredItemId(null);
  };

  return (
    <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'flex-start' }}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/Images/avatar4.jpg')}
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
        <Text style={styles.userName}>UserName</Text>
          <Text style={styles.greetingText}>xyz2162@gmail.com</Text>
          
        </View>
      </View>

      <View>
        <FlatList
          data={DrawerData}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={
                  styles.listContainer  }
                  // { backgroundColor: hoveredItemId === item.id ? '#5A64F5' : '#eff4fd' }
              
                onPressIn={() => handlePressIn(item.id)}
                onPressOut={handlePressOut}
                onPress={() => navigation.navigate(item.navigationTo)}
              >
                <Icon name={item.icon} color='#000' size={26} style={{ marginLeft: 8 }} />
                <Text style={styles.textList}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <TouchableOpacity style={styles.bottomView}>
        <Text style={{ fontSize: 19, fontWeight: '600', color: '#fff' }}>
          Login/SignUp
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center'
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginLeft: 8,
  },
  userName: {
    color: 'black',
    fontSize: 17,
    fontWeight: '600',
  },
  greetingText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500'
  },
  textContainer: {
    flex: 1,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
   
  },
  textList: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
    marginLeft: 5
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#1177ff',
    alignItems: 'center',
    padding: 11,
  }
});
