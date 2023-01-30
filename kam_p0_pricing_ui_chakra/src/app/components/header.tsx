'use client';

import React from 'react'
import {Box, Heading, Text} from '@chakra-ui/react';
export default function Header() {
  return (  
    <Box pb={'28'} as='section'>
      <Box textAlign={["left","left","center"]} color='gray.50' bg='purple.600' width='100%' pt={'18'} pb={'198px'} px='8'>
              <Heading fontSize={["3xl","3xl","5xl"]} fontWeight={'extrabold'} fontFamily={'Inter'}>Simple pricing for your business</Heading>
              <Text fontSize={["lg","lg","2xl"]} fontWeight={'medium'} pt={'4'} fontFamily={'Inter'}>Plans that are carefully crafted to suit your business.</Text>
      </Box>
    </Box>  
    
  )
}
