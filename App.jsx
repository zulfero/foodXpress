import {Image, Text, View, TextInput, Button, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categoryscreen from './src/screens/Categoryscreen';
import Loginscreen from './src/screens/Loginscreen';
import Homescreen from './src/screens/Homescreen';
import SingleFoodscreen from './src/screens/SingleFoodscreen';
import SignUpscreen from './src/screens/SignUpscreen';
import AllFoodsscreen from './src/screens/AllFoodsscreen';
import Cartscreen from './src/screens/Cartscreen';
import {NavigationContainer} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';

function App() {
  const Stack = createNativeStackNavigator();

  function StackNavigation() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Category" component={Categoryscreen} />
        <Stack.Screen name="SingleFood" component={SingleFoodscreen} />
        <Stack.Screen name="Login" component={Loginscreen} />
        <Stack.Screen name="Signup" component={SignUpscreen} />
        <Stack.Screen name="Cart" component={Cartscreen} />
        <Stack.Screen name="Allfoods" component={AllFoodsscreen} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
export default App;
