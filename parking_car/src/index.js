import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
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
          position: 'relative',
        }}
      />
      <View style={styles.containerMain}>
        <Text>Teste</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#cecece',
    zIndex: 0,
  },
  containerMain: {
    bottom: 0,
    zIndex: 1,
    height: 100,
    width: '100%',
    backgroundColor: 'orange',
    position: 'absolute',
  },
});
export default App;
