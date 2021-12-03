import { VStack } from '@chakra-ui/layout';
import  { Image } from '@chakra-ui/image';

const imageSrc = 'images/moxy.png'

export const Moxy = () => (
    <VStack
        justifyContent={ 'center' }
        height={ '100%' } 
        boxSize={ '3xl' }>
        <Image
            marginY={ 'auto' }
            alt={ 'Logo for Moxy' } 
            src={ imageSrc }/>
    </VStack>
)