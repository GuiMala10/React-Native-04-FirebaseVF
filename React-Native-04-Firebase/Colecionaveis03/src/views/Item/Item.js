import React, { useState, useEffect } from 'react';
import {Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import estiloItem from "./estiloItem";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function Item({navigation , route}) {

    const [item , setItem] = useState({});
    const {operacao, setOperacao} = route.params;

    useEffect(() => {
        setItem(route.params.item);
    }, [route.params.item]);

    const voltar = () => {
        navigation.navigate('Colecao')
    }

    const salvar = () => {

    }

    const remover = () => {

    }

    
    return (
    <View style={estiloItem.container}>
        
        <View style={estiloItem.header}>
            <TouchableOpacity onPress={voltar}>
            <MaterialIcons name="arrow-back" size={24} color="white"/>
            </TouchableOpacity>
            <Text style={estiloItem.texto}>Item</Text>
        </View>

        <View style={estiloItem.formularioContainer}>
            
            <View style={estiloItem.campoContainer}>
                <FontAwesome5 name="book" size={26} color="white" />
                <TextInput 
                style={estiloItem.campo}
                placeholder="Titulo"
                placeholderTextColor="#FFF"
                onChangeText={titulo => setItem({...item, titulo})}
                value={item.titulo}
                />
            </View>

            <View style={estiloItem.campoContainer}>
                <FontAwesome5 name="book-reader" size={26} color="white" />
                <TextInput 
                style={estiloItem.campo}
                placeholder="Autor"
                placeholderTextColor="#FFF"
                onChangeText={autor => setItem({...item, autor})}
                value={item.autor}
                />
            </View>

            <View style={estiloItem.campoContainer}>
                <FontAwesome5 name="calendar-alt" size={26} color="white" />
                <TextInput 
                style={estiloItem.campo}
                placeholder="Ano da Publicação"
                placeholderTextColor="#FFF"
                keyboardType='numeric'
                maxLength={4}
                onChangeText={anoPublicacao => setItem({...item, anoPublicacao})}
                value={item.anoPublicacao ? item.anoPublicacao.toString() : item.anoPublicacao}
                />
            </View>

            <View style={estiloItem.campoContainerDescricao}>
                <FontAwesome5 name="book-open" size={26} color="white" />
                <ScrollView style={estiloItem.campoDescricaoScroll}>
                    <TextInput
                    style={estiloItem.campoDescricao}
                    placeholder="Descrição"
                    placeholderTextColor="#FFF"
                    multiline={true}
                    numberOfLines={4}
                    blurOnSubmit={false}
                    onChangeText={descricao =>setItem({...item, descricao})}
                    value={item.descricao}
                    />
                </ScrollView>
            </View>

   
            <View style={estiloItem.botoesContainer}>


                <TouchableOpacity onPress={salvar} style={estiloItem.botaoContainer}>
                    <LinearGradient colors={['#FFFFFF', '#FF0000', '#000000']} style={estiloItem.botao}>
                        <MaterialIcons name="save" size={28} color="white" />
                    </LinearGradient>

                </TouchableOpacity>

                <TouchableOpacity onPress={remover} style={estiloItem.botaoContainer}>
                    <LinearGradient colors={['#FFFFFF', '#FF0000', '#000000']} style={estiloItem.botao}>
                        <MaterialIcons name="delete" size={28} color="white" />
                    </LinearGradient>

                </TouchableOpacity>

            </View>
   
   
        </View>

    </View>
) 

}
export default Item;