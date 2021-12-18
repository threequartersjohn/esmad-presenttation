import { useCallback, useState, useEffect } from 'react';
import { Box, VStack } from '@chakra-ui/layout';
import { Dot } from '../Dot';
import { EventPhoto } from './components/EventPhoto';

const pages = [
    EventPhoto
]

export const Networking = (props) => {
    const [activePage, setActivePage] = useState(0);

    const handleOnSetActivePage = useCallback((index) => setActivePage(index), [])
    
    return (
    <VStack 
        justifyContent={ 'space-between' }
        paddingY={ '4rem' }
        {...props} >
        <Box>
            { pages.map((Page, index) => (
                activePage === index && 
                <Page key={ index } />
            )) }
        </Box>
        <Box>
            { pages.length > 1 && pages.map((page, index) => (
                <Dot
                    key={ page }
                    index={ index }
                    isActive={ activePage === index }
                    onClick={ handleOnSetActivePage } />
            )) }
        </Box>
    </VStack>
    
)}