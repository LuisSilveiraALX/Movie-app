import React from 'react';
import { Image, Pressable } from 'react-native';

interface Props {
    id: number;
    poster: string;
    smallPoster?: boolean;
    clasName?: string;
}

const MoviePoster = ( { id , poster, smallPoster = false }:Props ) => {
  return (
    <Pressable  className={`opacity-90 px-2 ${MoviePoster}`} >
        <Image 
        source={{ uri: poster }}
        className='shadow-lg rounded-xl w-full h-full ' 
        style={{
            width: smallPoster ? 85 : 150,
            height: smallPoster ? 130 : 250
        }}
        resizeMode='cover'
        />
    </Pressable>
  )
}

export default MoviePoster