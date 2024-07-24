
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SelectPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState("");

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedProgram}
        onValueChange={(itemValue) => setSelectedProgram(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="-Select Program-" value="" />
        <Picker.Item label="Aeronautics" value="aeronautics" />
        <Picker.Item label="Automobile" value="automobile" />
        <Picker.Item label="Department of Agriculture" value="agriculture" />
        <Picker.Item label="Department of Apparel" value="apparel" />
        <Picker.Item label="Department of Banking" value="banking" />
        <Picker.Item label="Department of Beauty & Faculty of Wellness" value="beauty_wellness" />
        <Picker.Item label="Department of Engineering" value="engineering" />
        <Picker.Item label="Department of Fire Safety" value="fire_safety" />
        <Picker.Item label="Department of IT And Computer" value="it_computer" />
        <Picker.Item label="Department of Nursery teacher training (NTT)" value="ntt" />
        <Picker.Item label="Department of Paramedical & Health Science" value="paramedical_health" />
        <Picker.Item label="Department of Skill Development" value="skill_development" />
        <Picker.Item label="Department of Veterinary" value="veterinary" />
        <Picker.Item label="Department of Vocational" value="vocational" />
        <Picker.Item label="Department of Yoga & Naturopathy" value="yoga_naturopathy" />
        <Picker.Item label="testProgram" value="testProgram" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   backgroundColor:'#ffffff',
      padding:2,
      margin:12,
      borderRadius:12
      
    
    
  },
  picker: {
    height: 42,
    width: '100%',
  },
});

export default SelectPrograms;
