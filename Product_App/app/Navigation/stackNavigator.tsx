import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator';
const stack = createNativeStackNavigator();

const stackNavigator = () => {
    <stack.Navigator>
<stack.screen name="Maintabs" component={TabNavigator} options={{headerShown:false}} />
<stack.Screen name="ProductDetails" component={ProductDetails} options={{title:'Product Details'}}/>
    </stack.Navigator>
};

export default stackNavigator;
