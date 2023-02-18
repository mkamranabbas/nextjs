'use client';
import { Box,Heading,Text } from '@chakra-ui/react'

export default function HomeIntro() {
  return (
    <Box maxW={'1024px'} m={'auto'} pt={'8'} pb={'8'} as='section'>
      
      <Box textAlign={'center'} p={'4'}>
        
        <Heading as='h2' p={['2','2','2']} color={'purple.500'} fontSize={["2xl","3xl","4xl"]} fontWeight={'extrabold'} fontFamily={'Inter'}>The Program in a Nutshell</Heading>
        <Heading as='h3' p={['2','2','2']} color={'pink.500'} fontSize={["xl","xl","2xl"]} fontWeight={'bold'} fontFamily={'Inter'}>Earn While You Learn</Heading>
        
        <Text color={'gray.500'} fontSize={["lg","lg","xl"]} fontWeight={'medium'} pt={'4'} fontFamily={'Inter'}>
          In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.
        </Text>
      </Box>    

    </Box>
  )
}
