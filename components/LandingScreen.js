import React from 'react';
import { 
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LandingScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.titleText}> Music Player </Text>
      </View>

      {/* Task 1: Create your view here */}
      <View style={styles.view2}>
        <View style={styles.touchablesWrapper}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('tracks')}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}> Tracks </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('favorites')}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}> Favorites </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('playlists')}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}> Playlists </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#f1f2ff'
  },
  view1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp(6)
  },
  titleText: {
    fontSize: wp(10),
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: 'black'
  },

  // Task1: Add your styling here 
  view2: {
    flex: 5,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  touchablesWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp(17),
  },
  button: {
    width: wp(40),
    height: hp(7),
    borderRadius: wp(6),
    borderColor: '#3d54dc',
    backgroundColor: "#3d54dc",
    borderWidth: wp(3),
    alignItems: "center",
    justifyContent: "center",
    margin: wp(3)
  },
  buttonText: {
    color: "white",
    fontSize: wp(5.5),
    fontWeight: '400',
    fontFamily: 'Roboto'
  },

});

export default LandingScreen;