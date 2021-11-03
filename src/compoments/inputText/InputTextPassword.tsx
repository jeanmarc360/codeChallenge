import React, {ComponentType, FC, Ref, useState} from 'react';
import { 
    View,
    TextInput, 
    TouchableOpacity, 
    StyleSheet,
    Keyboard
} from 'react-native';
import {Image} from 'react-native-elements';
import {images} from '../../common/image/images';

interface InputPasswordProps {
    reference?: Ref<ComponentType<any>> | undefined;
    placeholder: string;
    value?: string | undefined;
    onChangeText?: ((text: string) => void) | undefined;
}

const InputTextPassword : FC <InputPasswordProps> = ({
    reference,
    placeholder,
    value,
    onChangeText,
  }) => {

    const [password, setPassword] = useState<boolean>(false);

    const changePassword = () => {
        if (password === true) {
        setPassword(false);
        } else {
        setPassword(true);
        }
    };
    return(
        <View style={style.container}>
            <TextInput
                ref={reference}
                placeholder={placeholder}
                value={value}
                secureTextEntry={password}
                onChangeText={onChangeText}
                style={style.textInput}
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                underlineColorAndroid="#f000"
                returnKeyType="next"/>

            <TouchableOpacity style={{marginRight:5}} onPress={changePassword}>
                <Image 
                    source={password? images.eyes_show : images.eyes_hide} 
                    style={style.eye} 
                    resizeMode='center' />
            </TouchableOpacity>
        </View>
    )
}

export default InputTextPassword;

const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    textInput: {
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
      },
    eye:{
        width: 20, 
        height: 20
    }
})