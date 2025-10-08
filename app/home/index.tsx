


import MainSlideshow from '@/presentation/components/movies/MainSlideshow';
import { useMovies } from '@/presentation/hooks/useMovies';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const HomeScreen = () => {

    const safeArea = useSafeAreaInsets();
    const { nowPlayingQuery } = useMovies();

    if (nowPlayingQuery.isLoading) {
      return (
      <View className='flex-1 items-center justify-center'>
        <ActivityIndicator color='purple' size={30} />
      </View>
    )
  }  

    return (
    <View className='mt-2' style={{ paddingTop: safeArea.top }} >
      <Text className='text-3xl font-bold px-4 mb-2'>Movies App</Text>

      {/* Carrusel de img */}
      <MainSlideshow movies={nowPlayingQuery.data ?? []} />

    </View>
  )





}

export default HomeScreen;