import React from 'react';
import { TouchableOpacity, View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = [
  { id: '1', name: 'Aeronautics', icon: 'flight', color: '#1E90FF' },
  { id: '2', name: 'Agriculture', icon: 'eco', color: '#32CD32' },
  { id: '3', name: 'Automobile', icon: 'directions-car', color: '#FF4500' },
  { id: '4', name: 'Banking', icon: 'account-balance', color: '#FFD700' },
  { id: '5', name: 'Beauty', icon: 'spa', color: '#FF69B4' },
  { id: '6', name: 'Computer', icon: 'laptop', color: '#6A5ACD' },
];

const IconItem = ({ name, icon, color }) => (
  <View style={styles.iconContainer}>
    <Icon name={icon} size={36} color={color} />
    <Text style={styles.iconLabel}>{name}</Text>
  </View>
);

const Programs = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Our Programs</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <IconItem name={item.name} icon={item.icon} color='#1177ff' />}
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
  seeAll: {
    fontSize: 17,
    color: '#c72229',
    fontWeight: '600',
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center', 
  },
  iconContainer: {
    alignItems: 'center',
    margin: 10,
    right:8,
    width: (Dimensions.get('window').width / 3) - 20, 
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
    fontWeight: '500',
    textAlign: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between', // Ensure items are spaced evenly
  },
});

export default Programs;
