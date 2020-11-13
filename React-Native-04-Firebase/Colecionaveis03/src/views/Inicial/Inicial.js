import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloInicial from './estiloInicial';
import { AntDesign } from '@expo/vector-icons';
import { useIsDrawerOpen } from '@react-navigation/drawer';

function Inicial({ navigation }) {

    const isDrawerOpen = useIsDrawerOpen();

    const exibirDrawer = () => {
        if(!isDrawerOpen){
            navigation.openDrawer();
        }
    }

    const abrirColecao = () => {
        navigation.navigate('Colecao')
    }
    
    const abrirItem = () => {
        navigation.navigate('Item')
    }
    
    return (
        <View style={estiloInicial.container}>
 
            <ImageBackground style={estiloInicial.fundo} source={require('../../../assets/imagens/fundo.png')}>

                <TouchableOpacity onPress={abrirColecao}>
                    <ImageBackground style={estiloInicial.botaoBackground} source={require('../../../assets/imagens/colecao.jpg')}>
                        <Text style={estiloInicial.botaoTexto}>Coleção</Text>                    
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress={abrirItem}>
                    <ImageBackground style={estiloInicial.botaoBackground} source={require('../../../assets/imagens/livros.jpg')}>
                        <Text style={estiloInicial.botaoTexto}>Item</Text>                    
                    </ImageBackground>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

export default Inicial;
