import { useNavigation } from '@react-navigation/native'
import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Input } from 'react-native-elements/dist/input/Input'
import Icon from "react-native-vector-icons/FontAwesome"
import { db } from '../firebase'

const AddChatScreen = () => {

    const navigation = useNavigation();

    const [input, setInput] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat",
        });
    },[navigation])

    const createChat = async() => {
        await db.collection(`chats`).add({
            chatName: input
        })
        .then(() => {
            navigation.goBack()
        })
        .catch((error) => alert(error));
    };

    return (
        <View style={styles.container}>
            <Input 
            placeholder="Enter a chat name" 
            value={input} 
            onChangeText={text => setInput(text)}
            onSubmitEditing={createChat}
            leftIcon={<Icon name="wechat" type="antdesign" size={24} color="black" />}
            />
            <Button onPress={createChat} title='Create new chat' />
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%",
    },
})
