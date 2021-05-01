import React from 'react';
import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import ProfileItem from '../components/ProfileItem';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo.js';
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from "@expo/vector-icons";

const Profile = () => {
  const {
    age,
    image,
    info1,
    info2,
    info3,
    info4,
    location,
    match,
    name
  } = Demo[7];

  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={image} style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity>
              <Text style={styles.topIconLeft}>
                <MaterialIcons name='keyboard-arrow-left' size={30}  />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.topIconRight}>
                <MaterialCommunityIcons name='dots-vertical' size={25} />
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ProfileItem
          matches={match}
          name={name}
          age={age}
          location={location}
          info1={info1}
          info2={info2}
          info3={info3}
          info4={info4}
        />

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.circledButton}>
            <Text style={styles.iconButton}>
            <MaterialCommunityIcons name='dots-horizontal' size={20}  />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundedButton}>
            <Text style={styles.iconButton}>
            <MaterialCommunityIcons name='chat' size={20}  />
            </Text>
            <Text style={styles.textButton}>Start chatting</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
