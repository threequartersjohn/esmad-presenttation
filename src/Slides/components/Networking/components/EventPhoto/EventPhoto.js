import { Image } from "@chakra-ui/image"
import { VStack } from "@chakra-ui/layout";

const imageSrc = 'images/self_opo.jpg'

export const EventPhoto = () => (
    <VStack 
        justifyContent={ 'center' }
        height={ '100%' } 
        boxSize={ '3xl' }>
        <Image 
            alt={ 'Photo of myself at an event.' }
            src={ imageSrc }/>
    </VStack>
)