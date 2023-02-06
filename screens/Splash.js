import react, { useCallback } from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, TextInput, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
function Splash(props, navigation, route) {

    const HeaderText = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>Forcast🌡</Text>
            </View>
        )
    }

    const BodyText = () => {
        return (
            <View style={styles.body}>
               <LottieView style={styles.lottie} source={require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_WeatherApp2/WeatherApp2/assets/imgs/32532-day-night.json')} autoPlay loop />
            </View>
        )

    }

    const FooterText = () => {
        return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Main')}>
             <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Macondo-Regular' }}>Weather Information</Text>
            </TouchableOpacity>
        </View>
        )
    }




return (
    <View style={styles.FullBodyContainer}>
        <ImageBackground source={require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_WeatherApp2/WeatherApp2/assets/imgs/forcast2.jpg')} style={styles.img} />
        <HeaderText />

        <BodyText />

        <FooterText /> 
    </View>
    )
    
}


const styles = StyleSheet.create({
    FullBodyContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 110,
        left: 0,
        right: 0,
        bottom: 0,
    },

    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },


    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 10,
        left: 0,
        right: 0,
        height: 100,
    },

    headerText: {
        fontSize: 65,
        fontFamily: 'Macondo-Regular',
        color: '#aa5061',
    },

    img: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        
        
       
    },

    lottie: {
        width: 300,
        height: 300,
        position: 'absolute',
        top: 45,
        left: 20,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',

    },

    button: {
        backgroundColor: '#aa5061',
        width: 300,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 600,
        left: 30,
        right: 0,
        bottom: 0,

        
    },


});
















export default Splash;