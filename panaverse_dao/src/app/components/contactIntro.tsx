'use client';
import { Box,Heading,Text } from '@chakra-ui/react'

export default function ContactIntro() {
  return (
    <Box maxW={'1024px'} m={'auto'} pt={'8'} pb={'8'} as='section'>
      
      <Box textAlign={'center'} p={'4'}>
  
  
        <Heading as='h3' p={['2','2','2']} color={'pink.500'} fontSize={["xl","xl","2xl"]} fontWeight={'bold'} fontFamily={'Inter'}>
        To participate in the program and become eligible for the most prestigious credentials for AI, Cloud and Blockchain technologies in the world, students must complete the following process
        </Heading>
        
        <Text color={'gray.500'} fontSize={["lg","lg","xl"]} fontWeight={'medium'} pt={'4'} fontFamily={'Inter'}>
        For questions related to admissions, you may call us on the PIAIC Helpline: +92-308-2220203 between 10 AM - 6 PM.
        Please note we are closed on Fridays.
        For technical questions related to coursework, you may contact us via email at education@piaic.org.
        </Text>
      </Box>    

    </Box>
  )
}
