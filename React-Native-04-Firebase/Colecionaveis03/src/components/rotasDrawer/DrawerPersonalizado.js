import React from "react";
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import estiloRotasDrawer from './estiloRotasDrawer';

function DrawerPersonalizado(props) {
  return (
    <DrawerContentScrollView {...props}>

      <View style={estiloRotasDrawer.fotoContainer}>
        <Image 
          style={estiloRotasDrawer.foto}
          source={require('../../../assets/imagens/gui.jpg')}
        />
        <Text style={estiloRotasDrawer.nome}>Gui Mala 10</Text>
      </View>

      <DrawerItemList {...props}/>

    </DrawerContentScrollView>
  );
}

export default DrawerPersonalizado;