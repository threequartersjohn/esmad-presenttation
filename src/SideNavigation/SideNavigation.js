import { UnorderedList, ListItem as CHKRListItem, VStack, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useCallback } from "react";

const ListItem = ({ isActive, index, text, onClick }) => {
    const handleOnClick = useCallback(() => onClick(index), [index, onClick]);

    return (
        <CHKRListItem 
            marginY={ '1rem' }
            fontSize={ '1.5rem' }
            onClick={ handleOnClick }>
            <Button
                size={ 'lg' }
                borderWidth={ '0' }
                colorScheme={ 'blue' }
                isActive={ isActive }
                width={ '10rem' }
                variant={ 'outline' }
                _focus={{ outline: 'none' }}>
                { text }
            </Button>
        </CHKRListItem>
    )
}

export const SideNavigation = ({ slides, activeSlide, onSetActiveSlide }) => {
    return (
        <Box
            height={ '100%' }
            padding={ '1rem' }>
            <VStack 
                padding={ '3rem' }
                borderRadius={ '1rem' }
                height={ '100%' }
                justifyContent={ 'center' }>
                <UnorderedList
                    margin={ '0' }
                    listStyleType={ 'none' }>
                    { slides.map((slide, index) => (
                        <ListItem
                            key={ slide }
                            isActive={ activeSlide === index }
                            index={ index }
                            text={ slide }
                            onClick={ onSetActiveSlide } />
                    )) }
                </UnorderedList>
            </VStack>
        </Box>
    )
}