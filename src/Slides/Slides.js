import { VStack } from '@chakra-ui/layout';
import { Networking, Tips, Personal, Work } from './components'

export const Slides = ({activeSlide}) => {
    return (
        <VStack
            maxHeight={ '100%' }
            width={ '100%' }>
            {
                [Personal, Work, Networking, Tips]
                .map((Section, index) => (
                    activeSlide === index && 
                    <Section
                        key={ index }
                        height={ '100vh' }
                        width={ '100%' }  />
                ))
            }
        </VStack>
    );
}