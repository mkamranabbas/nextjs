'use client';
import { Box,Flex,Heading,Text, Image,SimpleGrid , GridItem } from '@chakra-ui/react'

export default function EligibilityCriteria() {
  return (
    <Box maxW={'100%'} m={'auto'} pt={'8'} pb={'8'} as='section' bg={'pink.50'}>
      
      <SimpleGrid  columns={[1,1,2]} gap={6} >
          <Box textAlign={['center','center','left']}  p={'4'}  >
            
            <Heading as='h2' p={['2','2','2']} color={'pink.500'} fontSize={["2xl","3xl","4xl"]} fontWeight={'extrabold'} fontFamily={'Inter'}>Eligibility Criteria</Heading>
            
            <Text color={'gray.500'} fontSize={["lg","lg","xl"]} fontWeight={'medium'} p={['2','2','4']}  fontFamily={'Inter'}>
            This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
            </Text>
          </Box>
          <Box textAlign={'center'}  p={'4'} m={'auto'}  >
            
          <Image src='/checklist.jpg' alt='' width={'600px'} height={'auto'} maxW={'100%'} />
            
          </Box> 
        </SimpleGrid >
         

    </Box>
  )
}
