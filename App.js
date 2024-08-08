import React from 'react'; // Importa a biblioteca React
import { StyleSheet, Text, View } from 'react-native'; // Importa os componentes necessários do React Native

// Define um componente funcional chamado Greeting
const Greeting = (props) => {
  // Este componente recebe 'props' como argumento
  return (
    <View>
      {/* Exibe um texto utilizando a propriedade 'name' passada via props */}
      <Text style={styles.text}>Hello, {props.name}!</Text>
    </View>
  );
}

// Define o componente principal do aplicativo
export default function App() {
  return (
    <View style={styles.container}>
      {/* Renderiza o componente Greeting três vezes com diferentes valores para a propriedade 'name' */}
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </View>
  );
}

// Define os estilos utilizados pelos componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz com que o container ocupe todo o espaço disponível
    justifyContent: 'center', // Alinha o conteúdo no centro verticalmente
    alignItems: 'center', // Alinha o conteúdo no centro horizontalmente
    backgroundColor: '#fff', // Define a cor de fundo como branca
  },
  text: {
    fontSize: 24, // Define o tamanho da fonte do texto
    marginBottom: 10, // Adiciona uma margem abaixo do texto
  },
});
