import { Box, VStack } from '@chakra-ui/layout';
import { Dot } from '../Dot'
import { Moxy, Uphold } from './components';
import { useKeyboardEvent, useTraverseArray } from '@threequartersjohn/react-custom-hooks';

const pages = [
    Moxy,
    Uphold,
];

export const Work = (props) => {
    const [ActivePage, activePageIndex, { setNextActive, setPreviousActive, setActiveIndex }] = useTraverseArray(pages);

    useKeyboardEvent('ArrowLeft', () => setPreviousActive());
    useKeyboardEvent('ArrowRight', () => setNextActive());

    return (
        <VStack
            justifyContent={ 'space-between' }
            paddingY={ '4rem' }
            {...props}>
            <Box>
                <ActivePage />
            </Box>
            <Box>
                {pages.map((_, index) => (
                    <Dot 
                        key={ `dot-${index}` }
                        isActive={ activePageIndex === index }
                        index={ index } 
                        onClick={  setActiveIndex }/>
                ))}
            </Box>
        </VStack>
    )
}