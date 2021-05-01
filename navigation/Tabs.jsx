import React from "react";
import {  View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import styles from "../assets/styles";
import HomeScreen from "../containers/Home";
import MatchesScreen from "../containers/Matches";
import MessagesScreen from "../containers/Messages";
import ProfileScreen from "../containers/Profile";
import Icon from "../components/Icon";
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
      <Tab.Navigator
      tabBarOptions={{
        		activeTintColor: "#7444C0",
			inactiveTintColor: "#363636",
			labelStyle: {
				fontSize: 14,
				textTransform: "uppercase",
				paddingTop: 5
			},
			 style: {
				backgroundColor: "#FFF",
				borderTopWidth: 0,
				//paddingVertical: 30,
				height: 50,
				
				shadowOpacity: 0.05,
				shadowRadius: 10,
				shadowColor: "#000",
				shadowOffset: { height: 0, width: 0 }
			 }
      }}
      >
          <Tab.Screen
              name="Explore"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#7444C0" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
						<MaterialIcons name='explore' size={20}  />
						</Text>
					);
				}
              }}
          />
          <Tab.Screen
              name="Matches"
              component={MatchesScreen}
              options={{
                tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#7444C0" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
						<MaterialCommunityIcons name='heart' size={20} />
						</Text>
					);
				}
              }}
          />
          <Tab.Screen
              name="Chat"
              component={MessagesScreen}
              options={{
                tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#7444C0" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
						<MaterialCommunityIcons name='chat' size={20}  />
						</Text>
					);
				}
              }}
          />
          <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#7444C0" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
						<AntDesign name='user' size={20} />
						</Text>
					);
				}
              }}
          />
      </Tab.Navigator>
  )
}


export default Tabs;

