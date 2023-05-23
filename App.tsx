import { StatusBar } from 'expo-status-bar'
import {
  ImageBackground,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from './src/assets/bg-blur.png'
import logo from './src/assets/love-and-romance.png'
import Stripes from './src/assets/stripes.svg'
import { styled } from 'nativewind'

const StyledStripes = styled(Stripes)

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })
  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 items-center bg-gray-50 px-8"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <Image source={logo} style={{ width: 200, height: 200 }} />

        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-600">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-700">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-red-500 px-5 py-2"
        >
          <Text className="font-alt text-sm uppercase text-red-50">
            Cadastrar Lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="mb-3 text-center font-body text-sm leading-relaxed text-gray-700">
        Feito com ❤ por Gabriel C. Medeiros
      </Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
