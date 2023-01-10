import React, { useState } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

// import Call API
import call from 'react-native-phone-call';

const Phone = ({ navigation }) => {
    const [inputValue, setInputValue] = useState('05...');

    const triggerCall = () => {
        // Check for perfect 10 digit length
        if (inputValue.length != 10) {
            alert('Please insert correct contact number');
            return;
        }

        const args = {
            number: inputValue,
            prompt: true,
        };
        // Make a call
        call(args).catch(console.error);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.container}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{
                            flex: 1
                        }}>
                            <Text style={styles.titleText}>
                                Example to Make a Phone Call in React Native App
                            </Text>
                            <Text style={styles.titleTextsmall}>
                                Enter Conatct Number to Call
                            </Text>
                            <TextInput
                                value={inputValue}
                                onChangeText={
                                    (inputValue) => setInputValue(inputValue)
                                }
                                placeholder={'Enter Conatct Number to Call'}
                                keyboardType="numeric"
                                style={styles.textInput}
                            />

                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.buttonStyle}
                                onPress={triggerCall}>
                                <Text style={styles.buttonTextStyle}>
                                    Gọi
                                </Text>
                            </TouchableOpacity>

                            {/* <TouchableOpacity
                                onPress={() => navigation.navigate('Home')}
                            >
                                <Text>
                                    Home
                                </Text>
                            </TouchableOpacity> */}
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </View>

        </SafeAreaView>
    );
};

export default Phone;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        textAlign: 'center',
    },
    titleText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    titleTextsmall: {
        marginVertical: 8,
        fontSize: 16,
    },
    buttonStyle: {
        justifyContent: 'center',
        marginTop: 15,
        padding: 10,
        backgroundColor: '#8ad24e',
    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 7
    },
});