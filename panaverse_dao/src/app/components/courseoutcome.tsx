'use client';
import { Box,Flex,Heading,Text, Image,SimpleGrid , GridItem, HStack, StackProps, Stack, StackItem } from '@chakra-ui/react'

export const ListItem = (propos: StackProps) => {

  const {children, ...rest} = propos;
  return(
      <HStack as={'li'} spacing={'0px'} {...rest} alignItems='start'>
          <Text textAlign={["left","left","center"]}>{children}</Text>
      </HStack>
  )
} 

export default function CourseOutCome() {
  return (
    <Box maxW={'100%'} m={'auto'} pt={'8'} pb={'8'} as='section' bg={'purple.50'}>
      
      <SimpleGrid  columns={[1,1,2]} gap={6} >

          <Box textAlign={'center'}  p={'4'} m={'auto'} >
            
            <Image align={'center'} src='/earn-money.jpg' alt='' width={'600px'} height={'auto'} maxW={'100%'}  />
            
          </Box> 

          <Box textAlign={['center','center','left']}  p={'4'}  >
            
            <Heading as='h2' p={['2','2','2']} color={'pink.500'} fontSize={["2xl","3xl","4xl"]} fontWeight={'extrabold'} fontFamily={'Inter'}>The Goal for Participants</Heading>
            
            <Text color={'gray.500'} fontSize={["lg","lg","xl"]} fontWeight={'medium'} p={['2','2','4']}  fontFamily={'Inter'}>
            Graduates of this program will possess Panaverse DAO-marketed goods (Full-Stack App Templates, AR and VR Experiences, and APIs) and, if desired, will be able to begin by delivering services at a rate of $50 per hour ($96,000 per year). This would provide a tremendous chance for Pakistani professionals and students to improve their financial status while simultaneously providing a much-needed boost to the economy by increasing software exports.
            </Text>

            <Stack as="ol" spacing={'2'} pt={'2'} color={'pink.500'} fontSize={["md","md","lg"]} fontFamily={'Inter'} fontWeight={'medium'} p={['2','2','4']}>
                <ListItem>1. Top 5 &apos;Metaverse&apos; jobs that will rule the future of tech industry</ListItem>
                <ListItem>2. Blockchain Developer Salary - Jun 2022</ListItem>
                <ListItem>3. Web3 Salaries Soar to $750,000 for Rank-and-File Devs</ListItem>
                <ListItem>4. The Metaverse, Blockchain Gaming, and NFTs</ListItem>
                <ListItem>5. How To Become Metaverse Developer: Scope, Skills, and Salary</ListItem>
            </Stack>
          </Box>
          
        </SimpleGrid >
         

    </Box>
  )
}
