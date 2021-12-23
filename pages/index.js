import { useCallback, useEffect, useState } from 'react';
import { HStack } from '@chakra-ui/react';
import { SideNavigation } from '../src/SideNavigation'
import { Slides } from '../src/Slides/Slides';
import { useKeyboardEvent, useTraverseArray } from '@threequartersjohn/react-custom-hooks';

const slides = [
  'Personal',
  'Work',
  'Networking',
  'Tips'
]

export default function Home() {
  const [_, activeSlideIndex, { setNextActive, setPreviousActive, setActiveIndex }] = useTraverseArray(slides);

  useKeyboardEvent('ArrowUp', () => setPreviousActive());
  useKeyboardEvent('ArrowDown', () => setNextActive());

  return (
    <HStack 
      as={ 'main' } 
      height={ '100vh' }
      width={ '100vw' }>
      <SideNavigation 
        activeSlide={ activeSlideIndex }
        onSetActiveSlide={  setActiveIndex }
        slides={ slides } />
      <Slides 
        activeSlide={ activeSlideIndex }/>
    </HStack>
  )
}
