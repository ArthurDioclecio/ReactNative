import {useRouter} from "expo-router";
import React from "react";
import { View, Button } from "react-native";

export default function HomeScreen() {
    const router = useRouter();
   return(
      <View>
        <Button title="Stack Navigation" onPress={() => router.push('/navigation/stack')}/>
        <Button title="Tabs Navigation" onPress={() => router.push('/navigation/tabs')}/>
        <Button title="Drawer Navigation" onPress={() => router.push('/navigation/drawer')}/>
      </View>
   );
}