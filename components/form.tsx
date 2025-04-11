import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import CustomButton from "./CustomButton";

export default function Form(){
        const [text, setext] = useState("");
        const [text1, setext1] = useState("");
        const [text2, setext2] = useState("");
        const [fim, setFinal] = useState("");


   return (
    <View>
                    <TextInput
                        placeholder="Primeiro"
                        value={text}
                        onChangeText={setext}
                    />
                    <TextInput
                        placeholder="Segundo"
                        value={text1}
                        onChangeText={setext1}
                    />
                    <TextInput
                        placeholder="Terceiro"
                        value={text2}
                        onChangeText={setext2}
                    />
                    <Button
                    title="finalizar"
                    onPress={() => {setFinal(text +" "+text1 +" "+text2)}}/>

                    <Text>{fim}</Text>
                    </View>

            
    
)
            function exibirTexto(){

                <View>
                    <Text>
                        {fim}
                    </Text>
                </View>

                
            }
}
