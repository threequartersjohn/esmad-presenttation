import { VStack } from '@chakra-ui/layout';
import  { Image } from '@chakra-ui/image';

const imageSrc = 'images/uphold.jpg'

export const Uphold = () => (
    <VStack 
        justifyContent={ 'center' }
        height={ '100%' } 
        boxSize={ '3xl' }>
        <Image
            alt={ 'Logo for Uphold' } 
            src={ imageSrc }/>
    </VStack>
)