
import { Heading, VStack } from "@chakra-ui/layout";

export const Slow = () => {
    return (
        <VStack
            justifyContent={ 'center' }
            height={ '100%' }
            boxSize={ '3xl' }>
                <Heading 
                    as={ 'h3' } 
                    fontSize={ '5xl' }>
                        Take it slow but take it
                </Heading>
        </VStack>
    )
}