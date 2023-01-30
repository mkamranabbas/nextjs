'use client';

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

import Header from './components/header';
import Pricing from './components/pricing';
import { Features } from './components/Features';

// 3. Pass the new theme to `ChakraProvider`
export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Pricing />
      <Features />
    </ChakraProvider>
    
  )
}
