import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = [
  { id: '1', name: 'Student Registration', icon: 'person-add', color: '#FF6347', navigateTo: 'StudentRegistraion' },
  { id: '2', name: 'Student Login', icon: 'login', color: '#00BFFF', navigateTo: 'StudentLogin' },
  { id: '3', name: 'Center Registration', icon: 'business', color: '#32CD32', navigateTo: 'CenterRegistraion' },
  { id: '4', name: 'Center Login', icon: 'vpn-key', color: '#FF4500', navigateTo: 'CenterLogin' },
];

const IconItem = ({ name, icon, color, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate(navigateTo)}>
        <Icon name={icon} size={36} color='#1177ff' />
        <Text style={styles.iconLabel}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const RegistrationCards = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Registration/Login</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <IconItem name={item.name} icon={item.icon} color={item.color} navigateTo={item.navigateTo} />}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: Dimensions.get('window').width / 3 - 20,
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
    fontWeight: '500',
    textAlign: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default RegistrationCards;
