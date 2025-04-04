import CustomButton from "@/components/customButton";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";



export default function HomeScreen(){
    const valorInicial = 0;
    const [count, setCount] = useState(valorInicial);
    
    return (
        <View>
            <Text>Bem-Vindo ao APP!{count}</Text>
            <Button 
            title="aumentar" 
            onPress={() => {setCount(count+1)}}
            />
            <Button 
            title="diminuir" 
            onPress={() => {setCount(count-1)}}
            />
            <Button 
            title="voltar" 
            onPress={() => {setCount(valorInicial)}}
            />

            <CustomButton title="pitufina"/>
        </View>
    );
}