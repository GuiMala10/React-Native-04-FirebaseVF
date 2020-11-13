import { StyleSheet } from 'react-native';

const estiloItem = StyleSheet.create({
  
    container: {   
      flex: 1,
      backgroundColor:'#000'
   },

   header: {
      height:50,
      backgroundColor: "#F00",
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 5, 
   },

   formContainer: {
       flex: 1,
       justifyContent: 'center', 
   },

   texto: {
       fontSize: 20,
       color: "#FFF",
       fontWeight: 'bold',
       marginRight: 150
   },

   campoContainer: {
       flexDirection: 'row',
       padding: 5,
       paddingLeft: 50,
       paddingRight: 50,
       margin: 5,
       marginRight: 50,
       alignItems: 'center',
   },
  
   campoContainerDescricao: {
       flexDirection: 'row',
       padding: 5,
       paddingLeft: 50,
       paddingRight: 50,
       margin: 5,
   },

   campo: {
       widht: '100%',
       fontSize: 18,
       color: '#FFF',
       backgroundColor: 'F0FFFF',
       marginLeft: 15,
       padding: 10,
       borderWidth: 2,
       borderColor: '#FFF',
       borderRadius: 5,
   },

   campoDescricao:{
       widht: '100%',
       height: 90,
       fontSize: 18,
       color: '#FFF',
       backgroundColor: '#000',
       marginLeft: 15,
       padding: 10,
       borderWidth:2,
       borderColor: '#FFF',
       borderRadius: 5,
       textAlignVertical: 'top',
   },

   campoDescricaoScroll: {
       widht: '100%',
   },

   botoesContainer:{
       flexDirection: 'row',
       justifyContent: 'flex-end',
       paddingRight: 50,
   },

   botaoContainer: {
       alignItems: 'center',
       padding: 5,

   },

   botao: {
       widht: 50,
       height: 50,
       borderRadius: 10,
       justifyContent: 'center',
       alignItems: 'center',
       padding: 10,
   }

});

export default estiloItem;