import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
const App = () => {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -23.5629,
          longitude: -46.6544,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          height: '100%',
          width: '100%',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
