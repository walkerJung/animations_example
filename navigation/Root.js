import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator>
    <Nav.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
  </Nav.Navigator>
);

export default Root;
