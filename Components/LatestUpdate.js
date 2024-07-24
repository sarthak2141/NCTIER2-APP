import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = [
  { id: '7', name: 'Latest Circular', icon: 'update', color: '#FF6347' },
  { id: '8', name: 'Examination', icon: 'assignment', color: '#00BFFF' },
  { id: '9', name: 'Curriculum', icon: 'school', color: '#32CD32' },
  { id: '10', name: 'Notice', icon: 'notifications', color: '#FF4500' },
];

const IconItem = ({ name, icon, color }) => (
  <View style={styles.iconContainer}>
    <Icon name={icon} size={36} color='#1177ff'  />
    <Text style={styles.iconLabel}>{name}</Text>
  </View>
);

const LatestUpdates = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Latest Updates</Text>
        {/* <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity> */}
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <IconItem name={item.name} icon={item.icon} color={item.color} />}
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

export default LatestUpdates;
