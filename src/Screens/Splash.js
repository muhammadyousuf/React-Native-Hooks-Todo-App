import React, {useEffect} from 'react';
import {View} from 'native-base';
import {StyleSheet} from 'react-native';
import {DotIndicator} from 'react-native-indicators';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 2000);
  });
  return (
    <View style={styles.container}>
      <DotIndicator color="#fff" size={12} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B40300',
    flexDirection: 'column',
  },
});
