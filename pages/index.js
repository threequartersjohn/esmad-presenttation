import { useCallback, useEffect, useState } from 'react';
import { HStack } from '@chakra-ui/react';
import { SideNavigation } from '../src/SideNavigation'
import { Slides } from '../src/Slides/Slides';

const slides = [
  'Personal',
  'Work',
  'Networking',
  'Tips'
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const handleOnSetActiveSlide = useCallback((slide) => setActiveSlide(slide), [])

  useEffect(()=> {
    const keyboardListener = (event) => {

      if ([38].includes(event.keyCode)) {
        setActiveSlide(Math.min(Math.max(activeSlide - 1, 0), slides.length - 1));
      }

      if ([40].includes(event.keyCode)) {
        setActiveSlide(Math.min(Math.max(activeSlide + 1, 0), slides.length - 1));
      }
    }

    window.addEventListener('keydown', keyboardListener);

    return () => window.removeEventListener('keydown', keyboardListener)

  }, [activeSlide])

  return (
    <HStack 
      as={ 'main' } 
      height={ '100vh' }
      width={ '100vw' }>
      <SideNavigation 
        activeSlide={ activeSlide }
        onSetActiveSlide={  handleOnSetActiveSlide }
        slides={ slides } />
      <Slides 
        activeSlide={ activeSlide }/>
    </HStack>
  )
}
