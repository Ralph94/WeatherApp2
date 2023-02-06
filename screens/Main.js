import react, { useCallback, useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, TextInput, ActivityIndicator, TouchableOpacity, Alert, Animated, TouchableWithoutFeedback } from 'react-native';
import LottieView from 'lottie-react-native';
import axios from 'axios';
import tw from 'twrnc';
import LinearGradient from 'react-native-linear-gradient';



function Main(props, navigation, route) {
    const [animation, setAnimation] = useState(new Animated.Value(0));
    const [input, setInput] = react.useState(parseFloat(''));
    const [loading, setLoading] = react.useState(false);
    const [data, setData] = react.useState(null);

    


    

    const api = {
        key: "43b64cd29946cbe5329e7a3643dcb93e",
        base: "https://api.openweathermap.org/data/2.5/"
    };

    const fetchDataHandler = useCallback(() => { 
        setLoading(true);
        setInput('');
        axios({
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api.key}`,

        })
            .then((res) => {
                console.log(res.data);
                setData(res.data);
                
            })
            .catch(e => console.dir(e))
            .finally(() => setLoading(false));
    }, [api.key, input]);



    // create pulse animation style
    const pulseAnimationStyle = {
        transform: [
            {
                scale: animation.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 1.2, 1],
                }),
            },
        ],
    };

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animation, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(animation, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    }, []);

    // bounce animation
    const [animation2, setAnimation2] = useState(new Animated.Value(0));
    const animationRef = useRef(animation2);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animationRef.current, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(animationRef.current, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      })
    ]).start(() => setAnimation2(new Animated.Value(0)));
  }, [animation2]);

  const translateY = animation2.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -30, 0]
  });

    

   
    
        

 return (
        <View style={styles.container}>
         <Image source={require('C:/Users/Raffp/Desktop/React Native Projects/React_Native_WeatherApp2/WeatherApp2/assets/imgs/forcast2.jpg')} style={styles.img} />
            <View style={{ position: 'absolute', bottom: 50, left: 0, right: 0, alignItems: 'center', marginHorizontal: 10, padding: 10, height: 100, }}>
                <TextInput
                    placeholder="Enter City"
                    onChangeText={(text) => setInput(text)}
                    value={input}
                    onSubmitEditing={fetchDataHandler}
                    placeholderTextColor="white"
                 style={styles.TextInput} />
       <Animated.View style={[styles.box, { transform: [{ translateY }] }]}>
        <Text style={styles.headerText}>Weather Info 🌝</Text>
      </Animated.View>
        </View>
          
            {loading && (
                <View>
                    <ActivityIndicator size="large" color="white" />
                </View>
            )}
            {data && (
             <View style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
                 <Animated.View style={[styles.headerView, pulseAnimationStyle]}>
                  <Text style={styles.ForcastText}>{`${data?.name}, ${data?.sys?.country}`}</Text>
                 </Animated.View>
                <Animated.View style={[styles.headerView2, pulseAnimationStyle]}>
                 <Text style={styles.ForcastText2}>{new Date().toLocaleDateString()}</Text>
                 </Animated.View>
                 <Animated.View style={[styles.headerView3, pulseAnimationStyle]}>
                    <Text style={styles.ForcastText3}>{`${Math.round(data?.main?.temp_min)}°C - ${Math.round(data?.main?.temp_max)}°C`}</Text>
                 </Animated.View>
                </View>
         )}
         
         
        </View>
    )
}







    const styles = StyleSheet.create({

        container: {
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        },
            

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
        },

        header: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },

        box: {
            width: 300,
            height: 100,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },



        headerText: {
            fontSize: 40,
            fontFamily: 'Macondo-Regular',
            color: 'gold',
        },

        headerView: {
            width: 100,
            height: 100,
            borderRadius: 50,
            borderColor: 'gold',
            borderWidth: 1,
            alignSelf: 'center',
            position: 'absolute',
            top: 100,
            left: 10,
            right: 0,
        },

        headerView2: {
            width: 100,
            height: 100,
            borderRadius: 50,
            borderColor: 'gold',
            borderWidth: 1,
            alignSelf: 'center',
            position: 'absolute',
            top: 250,
            left: 120,
            right: 0,
            bottom: 0,
        },

        headerView3: {
            width: 100,
            height: 100,
            borderRadius: 50,
            borderColor: 'gold',
            borderWidth: 1,
            alignSelf: 'center',
            position: 'absolute',
            top: 400,
            left: 230,
            right: 0,
        },


        AnimatedText: {
            position: 'absolute',
            top: 75,
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'center',

        },

        bodyText: {
            fontSize: 30,
            fontFamily: 'Macondo-Regular',
            color: '#000100',
        },


        footer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',

        },

        img: {
           
        },

        TextInput: {
            height: 40,
            width: 300,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 10,
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
            fontFamily: 'Macondo-Regular',
        },



    ForcastText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Macondo-Regular',
        textAlign: 'center',
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        overflow: 'hidden',
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: 'gold',
        alignSelf: 'center',


        
    },

    ForcastText2: {
        color: 'white',
        fontSize: 30.5,
        fontFamily: 'Macondo-Regular',
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',

    },

    ForcastText3: {
        color: 'white',
         fontSize: 30.5,
        fontFamily: 'Macondo-Regular',
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',

    },


    });










export default Main;










