import { StatusBar, View, FlatList,StyleSheet } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Programs from '../Components/Programs';
import LatestUpdates from '../Components/LatestUpdate';
import Carousel from '../Components/Carousel';
import RegistrationCards from '../Components/RegistrationCards';



const HomeScreen = ({navigation}) => {
  const components = [
    { id: 'header', component: <Header  navigation={navigation}/> },
    { id: 'carousel', component: <Carousel />, padding: true },
    { id: 'programs', component: <Programs /> },
    { id: 'latestUpdates', component: <LatestUpdates /> },
    { id: 'registrationCards', component: <RegistrationCards /> },
  ];
  return (
    <View style={{ flex: 1 ,backgroundColor:'#f0f4f8'}}>
      <StatusBar barStyle={'light-content'} />
      <FlatList
        data={components}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={item.padding ? { padding: 10 } : {}}>
            {item.component}
          </View>
        )}
       showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 100, 
  },
});



export default HomeScreen;
