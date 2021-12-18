import { Box, VStack } from '@chakra-ui/layout';
import { useCallback, useEffect, useState } from 'react';
import { Dot } from '../Dot'
import { Moxy, Uphold } from './components';
import { useKeyboardEvent } from 'react-custom-hooks';

const pages = [
    Moxy,
    Uphold,
];

export const Work = (props) => {
    const [activePage, setActivePage] = useState(0);

    const handleOnSetActivePage = useCallback((index) => setActivePage(index), []);

    useKeyboardEvent('ArrowLeft', () => setActivePage(Math.min(Math.max(activePage - 1, 0), pages.length - 1)));
    useKeyboardEvent('ArrowRight', () => setActivePage(Math.min(Math.max(activePage + 1, 0), pages.length - 1)));

    return (
        <VStack
            justifyContent={ 'space-between' }
            paddingY={ '4rem' }
            {...props}>
            <Box>
                {pages.map((Page, index) => (
                    activePage === index && 
                    <Page key={ `page-${index}` } />
                ))}
            </Box>
            <Box>
                {pages.map((_, index) => (
                    <Dot 
                        key={ `dot-${index}` }
                        isActive={ activePage === index }
                        index={ index } 
                        onClick={  handleOnSetActivePage }/>
                ))}
            </Box>
        </VStack>
    )
}