import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Home = () => {
  const [selectedCity, setSelectedCity] = useState('pune');
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(true);
  const [items, setItems] = useState([
    {label: 'Pune0', value: 'pune'},
    {label: 'Indore', value: 'indore'}
  ]);


  const handleCityChange = (city) => {
    setSelectedCity(city);
    // You can perform actions based on the selected city here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Weather App!</Text>
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Select a city:</Text>

        {/* <Picker
          selectedValue={selectedCity}
          style={styles.dropdown}
          onValueChange={(itemValue) => handleCityChange(itemValue)}
        >
          <Picker.Item label="Pune" value="Pune" />
          <Picker.Item label="Delhi" value="Delhi" />
          <Picker.Item label="Indore" value="Indore" />
        </Picker> */}
      </View>
      <View>
      <DropDownPicker
      open={open}
      value={selectedCity}
      items={items}
      setOpen={setOpen}
      onPress={(open) => console.log('was the picker open?', open)}
      setValue={setValue}
      setItems={setItems}
    />
      </View>
      {/* Other components or weather information can be added here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dropdownLabel: {
    fontSize: 18,
    marginRight: 10,
  },
  dropdown: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default Home;
