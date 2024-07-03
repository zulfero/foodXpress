import {Image, Text, View, TextInput, Button, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

function Homescreen() {
  return (
    <View>
          <Text className="text-center text-black text-xl font-bold my-9">
        Appetizers
      </Text>
      <View className="flex-row-reverse items-center mr-6 gap-6">
        <View className=" shadow-lg border-gray-200 border rounded-3xl w-[170px] items-center pb-6 ">
          <Image
            className="  w-[120px] h-[120px]"
            source={require('../../images/mozzarela.png')}></Image>

          <Text>Mozzarela</Text>
          <Text>Sticks</Text>
          <Text className="text-[#FF7356]">Ksh. 1,900</Text>
        </View>

        <View className=" shadow-9xl border-gray-200 border rounded-3xl w-[170px] items-center pb-6 ml-7">
          <Image
            className="  w-[120px] h-[120px]"
            source={require('../../images/chicken-wings.png')}></Image>

          <Text>Chicken</Text>
          <Text>Wings</Text>
          <Text className="text-[#FF7356]">Ksh. 1,900</Text>
        </View>

        
      </View>

      <View className="flex-row-reverse items-center mr-6 gap-4 my-3">
        <View className=" shadow-lg border-gray-200 border rounded-3xl w-[170px] items-center pb-6 ">
          <Image
            className="  w-[120px] h-[120px]"
            source={require('../../images/spinach-dip.png')}></Image>

          <Text>Spinach</Text>
          <Text>Dip</Text>
          <Text className="text-[#FF7356]">Ksh. 1,900</Text>
        </View>

        <View className=" shadow-9xl border-gray-200 border rounded-3xl w-[170px] items-center pb-6 ml-7">
          <Image
            className="  w-[120px] h-[120px]"
            source={require('../../images/grilled-chicken.png')}></Image>

          <Text>Grilled</Text>
          <Text>Chicken</Text>
          <Text className="text-[#FF7356]">Ksh. 1,900</Text>
        </View>

        
      </View>


      <View className="flex-row-reverse items-center mr-6 gap-6 ">
        <View className=" shadow-lg border-gray-200 border rounded-3xl w-[170px] items-center pb-6 ">
          <Image
            className="  w-[120px] h-[120px]"
            source={require('../../images/chocolate-cake.png')}></Image>

          <Text>Chocolate </Text>
          <Text>Cake</Text>
          <Text className="text-[#FF7356]">Ksh. 1,900</Text>
        </View>

        <View className=" shadow-9xl border-gray-200 border rounded-3xl w-[170px] items-center pb-6 ml-7">
          <Image
            className="  w-[120px] h-[120px]"
            source={require('../../images/spaghetti-bolognese.png')}></Image>

          <Text>Spaghtei</Text>
          <Text>Bolognese</Text>
          <Text className="text-[#FF7356]">Ksh. 1,900</Text>
        </View>

        
      </View>
  
    </View>
  );
}
export default Homescreen;