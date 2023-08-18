import { View, Text, Button } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../FireBaseConfig'


const Home = () => {
    return (
        <View>
            <Text>Welcome Back </Text>
            <Button onPress={() => FIREBASE_AUTH.signOut()} title='Logout' />
        </View>
    )
}

export default Home