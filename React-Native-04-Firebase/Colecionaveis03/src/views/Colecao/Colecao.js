import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import estiloColecao from './estiloColecao';
import ItemLista from '../../components/ItemLista/ItemLista';
import { MaterialIcons } from '@expo/vector-icons';

function Colecao({ navigation }) {

    const [colecao, setColecao] = useState( [
        {
            id: '1',
            titulo: 'Jogos Vorazes',
            descricao: 'Na região antigamente conhecida como América do Norte, a Capital de Panem controla 12 distritos e os força a escolher um garoto e uma garota, conhecidos como tributos, para competir em um evento anual televisionado. Todos os cidadãos assistem aos temidos jogos, no qual os jovens lutam até a morte, de modo que apenas um saia vitorioso.',
            autor: 'Suzanne Collins',
            anoPublicacao: '2012',                                                    
            foto: require('../../../assets/itens/1.jpg'),
        },
        {
            id: '2',
            titulo: 'Jogos Vorazes - Em Chamas',
            descricao: 'Após saírem vencedores da última edição dos Jogos Vorazes, as atitudes desafiadoras de Katniss e Peeta acabam inspirando uma rebelião contra a opressiva Capital. No entanto, os dois são obrigados a participarem de uma edição especial do torneio, o Massacre Quaternário, que acontece apenas a cada 25 anos, e reúne vencedores das edições anteriores.',
            autor: 'Suzanne Collins',
            anoPublicacao: '2013',
            foto: require('../../../assets/itens/2.jpg'),
        },
        {
            id: '3',
            titulo: 'Jogos Vorazes - A Esperança pt.1',
            descricao: 'Após sobreviver à temível arena dos Jogos Vorazes, Katniss Everdeen está desanimada e destruída. Depois que a Capital reduziu o Distrito 12 a destroços, ela se refugiou no Distrito 13. Peeta Mellark foi submetido a uma lavagem cerebral, e agora está sob o domínio de Snow. Então, a presidência quer que Katniss lidere uma "resistência" e mobilize a população em uma empreitada que irá colocá-la no centro da trama para desmascarar Snow.',
            autor: 'Suzanne Collins',
            anoPublicacao: '2014',                                                    
            foto: require('../../../assets/itens/3.jpg'),
        },
        {
            id: '4',
            titulo: 'Jogos Vorazes - A Esperança pt.2',
            descricao: 'Katniss e seus amigos Peeta, Gale e Finnick embarcam em sua última missão: organizar uma resistência contra o presidente e libertar o povo de Panem. A coragem de Katniss faz renascer a esperança em um país disposto a se livrar da opressão.',
            autor: 'Suzanne Collins',
            anoPublicacao: '2015',                                                    
            foto: require('../../../assets/itens/4.jpg'),
        }                
                                            ] );


    const voltar = () => {
        navigation.navigate('Inicial')
    }

    const adicionar = () => {
        navigation.navigate('Item', {item: {}, operacao: 'adicionar'})
    }

    const editar = (item) => {
        navigation.navigate('Item', {item: item, operacao: 'editar'})
    }
    
    return (
        <View style={estiloColecao.container}>

            <View style={estiloColecao.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white"/>
                </TouchableOpacity>
                <Text style={estiloColecao.texto}>Coleção</Text>

                <TouchableOpacity onPress={adicionar}>
                    <MaterialIcons name="add" size={24} color="white" />
                </TouchableOpacity>

            </View>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={colecao}
                renderItem={ ({item}) => <ItemLista data={item} detalhe={() => editar(item)}/>}
            />

        </View>
    )
}

export default Colecao;
