import { Box } from "@chakra-ui/layout";
import { useCallback } from "react";

export const Dot = ({ index, isActive, onClick }) => {
    const handleOnClick = useCallback(() => onClick(index), [index, onClick]);

    return (
        <Box
            marginX={ '0.3rem' }
            as={ 'button' }
            borderRadius={ '50%' }
            backgroundColor={ isActive ? 'blue.400' : 'blue.200' }
            onClick={ handleOnClick }
            isActive={ isActive }
            boxSize={ '1.5rem' }
            _hover={{ backgroundColor: 'blue.400'  }}
            transition={ 'background-color 0.3s ease-in-out' }
            />
    )
}