import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItems = ({id, chatName, enterChat}) => {
    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
            <Avatar
                rounded
                source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_Signal..png",
                }}
            />

            <ListItem.Content>
                <ListItem.Title style={styles.name} >
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    This is a tast subtitle
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItems

const styles = StyleSheet.create({
    name: {
        fontWeight: "800",
    }
})
