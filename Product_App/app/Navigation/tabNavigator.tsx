import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../(tabs)/Home";
import ProductList from "../(tabs)/ProductList";
import ProductDetails from "../(tabs)/ProductDetails";
import Icon from 'react-native-vector-icons/Ionicons';

const tab= createBottomTabNavigator();

const TabNavigator=()=>
{
    <tab.Navigator>
          <tab.Screen name="Home" component={Home} options={{headerShown:false, tabBarIcon:({color, size})=>(<Icon name="home" color={color} size={size}/>)}} />
          <tab.Screen name="ProductList" component={ProductList} options={{headerShown:false
          , tabBarIcon:({color, size})=>(<Icon name="list" color={color} size={size}/>)}} />
            <tab.Screen name="ProductDetails" component={ProductDetails} options={{headerShown:false, tabBarIcon:({color, size})=>(<Icon name="information-circle" color={color} size={size}/>)}} />

    </tab.Navigator>
}
export default TabNavigator;
