import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { SignInUser, SignUpUser } from '../Reducers/AuthReducer';

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("Signin");
  const dispatch = useDispatch()

  const Authenticate = () => {
    if(auth === "Signin"){
      dispatch(SignInUser({email, password}))
    }

    else{
      dispatch(SignUpUser({email, password}))
      
    }
  }
  return (
    <View style={styles.body}>
      <View style={styles.signin}>
        <Text style={{ textAlign: 'center', fontSize: 25 }}>{auth}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <TextInput
         secureTextEntry
          style={styles.input}
          placeholder="Enter your Password"
          keyboardType="default"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        {
          auth=="Signin"?
          <TouchableOpacity onPress={()=>setAuth("SignUp")} style={{marginVertical: 10}}>
           <Text style={{ textAlign: 'center', fontSize: 20 }}>Don't have an account?</Text>   
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={()=>setAuth("Signin")} style={{marginVertical: 10}}>
           <Text style={{ textAlign: 'center', fontSize: 20 }}>Already have an account</Text>   
        </TouchableOpacity>
        }
     
        <Button
          title={auth}
          onPress = {()=>Authenticate()}
          style={{
          width:'95%'}}
        />
      </View>

    </View>
  )
}

export default Auth

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backGroundColor: 'white',
    justifyContent: "center",

  },
  signin: {
 
    width: '95%',
    alignItems: 'center',
    
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