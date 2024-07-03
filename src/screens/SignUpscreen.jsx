import {Image, Text, View, TextInput, Button, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

function SignUpscreen() {
  return (
    <View>
      <Image
        className="ml-8"
        source={require('../foodXpress/images/logo.png')}></Image>
      <View className="mb-7">
        <TextInput
          className="border border-gray-200 rounded-full bg-[#F0F0F0] mb-4 p-[20px]"
          placeholder="First Name"
        />

        <TextInput
          className="border border-gray-200 rounded-full bg-[#F0F0F0] mb-4 p-[20px]"
          placeholder="Last Name"
        />

        <TextInput
          className="border border-gray-200 rounded-full bg-[#F0F0F0] mb-4 p-[20px]"
          placeholder="Email Address"
        />

        <TextInput
          className="border border-gray-200 rounded-full bg-[#F0F0F0] mb-4 p-[20px]"
          placeholder="Password"
        />
      </View>
      <Text className="bg-[#FF7356] p-[25px] font-bold text-white rounded-full text-center text-[25px]">
        Create Account
      </Text>

      <Text className="text-center text-black line-through my-[10px]">OR</Text>

      <Text className="border border-gray-300 p-[20px] text-center font-bold text-[20px] rounded-full text-black ">
        Sign Up With Google
      </Text>

      <Text className="text-center my-5 text-black">
        Already Have An Account? <Text className="text-[#FF7356] ">Log I</Text>
      </Text>
    </View>
  );
}
export default SignUpscreen;