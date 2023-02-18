'use client';

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';


export default function ChakraWrapper({childern}) {
  return (
    <ChakraProvider>
      {childern}
    </ChakraProvider>
  )
}
