import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { useRouter } from 'expo-router'
import {
  ImageBackground,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import { styled } from 'nativewind'
import * as SecureStore from 'expo-secure-store'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from '../src/assets/bg-blur.png'
import logo from '../src/assets/love-and-romance.png'
import Stripes from '../src/assets/stripes.svg'
import { api } from '../src/lib/api'

const StyledStripes = styled(Stripes)

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint:
    'https://github.com/settings/connections/applications/bb14edd77ab3d6c0bea4',
}

export default function App() {
  const router = useRouter()

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  const [, response, signInWithGithub] = useAuthRequest(
    {
      clientId: 'bb14edd77ab3d6c0bea4',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'spacetime',
      }),
    },
    discovery,
  )

  async function handleGithubOAuthCode(code: string) {
    const response = await api.post('/register', {
      code,
    })

    const { token } = response.data

    await SecureStore.setItemAsync('token', token)

    router.push('/memories')
  }

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params

      handleGithubOAuthCode(code)
    }
  }, [response])

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
          onPress={() => signInWithGithub()}
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
