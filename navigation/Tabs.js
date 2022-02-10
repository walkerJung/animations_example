import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CardAnimation from "../screens/CardAnimation";
import DragAndDropAnimation from "../screens/DragAndDropAnimation";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Card"
        component={CardAnimation}
        options={{ title: "Card PJ" }}
      />
      <Tab.Screen
        name="DragAndDropAnimation"
        component={DragAndDropAnimation}
        options={{ title: "Drag and Drop PJ" }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
