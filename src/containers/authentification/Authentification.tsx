import React, {FC, useEffect,useState, createRef} from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { Text } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import {style} from "./style";
import InputTextPassword from "../../compoments/inputText/InputTextPassword";
import {Image} from 'react-native-elements';
import {images} from '../../common/image/images';
import {useSelector, useDispatch} from 'react-redux';
import { LoginInterface } from '../../redux/types';
import {postLogin} from '../../redux/index';
import { RootState } from '../../redux/reducers/index';

interface Login {
    email: string;
    password: string;
}

export const Authentification : FC = () => {
    const [error, setError] = useState<string>('');
    const [loginValue, setLoginValue] = useState<Login>({
        email:'',
        password:''
    });
    const passwordInputRef = createRef();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    /***
   * Get the Login reducer value
   */
    const loginStore: LoginInterface |null = useSelector(
        (state: RootState) => state.LoginReducer.login,
    );

    const login = () => {
        //AsyncStorage.setItem('token', 'AAABBBCCCDDDEEEFFFGGGHHH');
        //navigation.navigate('Home','');
        dispatch(postLogin(loginValue.email.trim(),loginValue.password.trim()));
        
    }
    return(
        <View style={style.container}>
            <ScrollView
                keyboardShouldPersistTaps={'handled'}
                contentContainerStyle={style.scrollview}
                >
                <KeyboardAvoidingView enabled>
                    <View style={{alignItems: 'center'}}>
                        <Image 
                            source={images.default} 
                            style={style.image_header} 
                            resizeMode='contain'
                            />
                    </View>
                    <View style={style.view_email}>
                        <TextInput 
                            style={style.text_input_login}
                            value={loginValue.email}
                            onChangeText={(value)=>{setLoginValue({...loginValue,email:value})}}
                            placeholder="Email"
                            placeholderTextColor="#8b9cb5"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                passwordInputRef.current &&
                                passwordInputRef.current.focus()
                            }
                            underlineColorAndroid="#f000"
                            blurOnSubmit={false}/>
                    </View>
                    <View style={style.view_password}>
                        <InputTextPassword
                            reference={passwordInputRef}    
                            placeholder="Mot de passe"
                            value={loginValue.password}
                            onChangeText={(value)=>{setLoginValue({...loginValue,password:value})}}/>
                    </View>
                    <Text style={style.text_error}>{error}</Text>
                    <TouchableOpacity style={style.bouton_connexion} 
                        onPress={login}>
                            <Text style={style.text_connexion}>Connexion</Text>
                    </TouchableOpacity>
                    
                        <Text style={style.forgot_password_text}>Mot de passe oublier</Text>
                   
                </KeyboardAvoidingView>
            </ScrollView>

        </View>
    )
}

