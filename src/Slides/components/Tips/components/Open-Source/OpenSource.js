import { Heading, VStack } from "@chakra-ui/layout";

export const OpenSource = () => (
    <VStack
        justifyContent={ 'center' }
        height={ '100%' }
        boxSize={ '3xl' }>
            <Heading 
                as={ 'h3' } 
                fontSize={ '5xl' }>
                    Take advantage of open source
            </Heading>
    </VStack>
);