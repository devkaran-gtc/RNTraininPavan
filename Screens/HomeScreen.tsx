import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';

const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <Button
            title="Go to Settings"
            onPress={() => navigation.navigate('SettingsScreen')}
        />
    );
};

export default HomeScreen;