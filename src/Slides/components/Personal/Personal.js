import  { Box, Heading, VStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

const selfImageSrc = 'images/self.jpg'

export const Personal = (props) => (
    <Box {...props}>
        <VStack
            height={ '100%' }
            justifyContent={ 'center' }
            paddingY={ '4rem' }>
            <Box 
                boxSize={ 'lg' }
                marginBottom={ '5rem' }>
                <Image 
                    borderRadius={ '50%' }
                    alt={ 'Photo of myself.' }
                    src={ selfImageSrc } />
            </Box>
            <Heading 
                as={ 'h1' } 
                fontSize={ '5xl' }>
                    João Silva
            </Heading>
            <Heading fontSize={ '4xl' }>
                Frontend Engineer
            </Heading>
        </VStack>
    </Box>
)