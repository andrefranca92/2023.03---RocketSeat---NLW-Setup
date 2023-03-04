import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts,
         Inter_400Regular,
         Inter_600SemiBold,
         Inter_700Bold,
         Inter_800ExtraBold  
} from '@expo-google-fonts/inter';

//Components
import { Loading } from './src/components/Loading';

export default function App() {

  const [fonstLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold  
  })

  //Caso as fontes não estejam carregadas no App, retorna um componente de loading até que tenham sido carregadas
  if (!fonstLoaded) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text} > Olá </Text>
      <StatusBar barStyle="light-content" backgroundColor='transparent' translucent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#fff",
    fontFamily: "Inter_400Regular"
  }
});