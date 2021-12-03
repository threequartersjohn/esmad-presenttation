import { Heading, VStack } from "@chakra-ui/layout";

export const Questions = () => {
    return (
        <VStack
            justifyContent={ 'center' }
            height={ '100%' }
            boxSize={ '3xl' }>
                <Heading 
                    as={ 'h3' } 
                    fontSize={ '5xl' }>
                        Ask a lot of questions
                </Heading>
        </VStack>
    )
}