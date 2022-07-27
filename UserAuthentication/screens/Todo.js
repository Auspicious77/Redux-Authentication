import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import {Feather} from '@expo/vector-icons'

export default function Todo() {
    const [mytodo, setTodos] = useState("")

    const ListItems = () => {
     return(
        <View style={{flexDirection: 'row', padding: 10,
         justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={{}}>
          <Text style={{fontSize: 20}}>Item 1</Text>
          </View>
            <View style = {{paddingLeft: 30}}>
            <Feather name='delete' size={30} color={'red'}/>
            </View>
           
        </View>
     )
    }
    return (
        <View style={styles.body}>
            <TextInput
                style={styles.input}
                placeholder="Write Todo"
                value={mytodo}
                onChangeText={text => setTodos(text)}
            />

            <Button
                title= "Add Todos"
                onPress={() => console.log("Pressed")}
                style={{
                    width: '95%'
                }}
            />
            <ListItems/>
            <ListItems/>
            <ListItems/>

        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backGroundColor: 'white',
        justifyContent: "center",

    },
    input: {
        height: 40,
        alignItems: 'center',
        fontSize: 18,
        width: '95%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10

    },
})