'use client';
import { Box,Heading,Text } from '@chakra-ui/react'

export default function AboutIntro() {
  return (
    <Box maxW={'1024px'} m={'auto'} pt={'8'} pb={'8'} as='section'>
      
      <Box textAlign={'center'} p={'4'}>
        
        <Heading as='h2' p={['2','2','2']} color={'purple.500'} fontSize={["2xl","3xl","4xl"]} fontWeight={'extrabold'} fontFamily={'Inter'}>About Panaverse DAO</Heading>
        <Heading as='h3' p={['2','2','2']} color={'pink.500'} fontSize={["xl","xl","2xl"]} fontWeight={'bold'} fontFamily={'Inter'}>Zia Khan</Heading>
        
        <Text color={'gray.500'} fontSize={["lg","lg","xl"]} fontWeight={'medium'} pt={'4'} fontFamily={'Inter'} textAlign={'justify'}>
        Panaverse DAO is lead by Zia Khan who is the acting Chief Executive Officer of Panacloud (Pvt.) Ltd. He also the volunteer Chief Operating Officer of Presidential Initiative for AI and Computing (PIAIC) which is endorsed by the President Arif Alvi Along with Zia Khan, the program is lead by Daniyal Nagori who is the Chief Executive Officer of PIAC and the software lead for Panacloud. The aim of this program is prepare students for the IT industry by providing them with invaluable resources and opportunities. This is done by helping them grow with all the necessary resources and helping them earn dollars as they learn. By preparing the students for the IT industry and turning them into leaders, Panaverse aims to rid the financial deficit and balance the exports of the country with the help of the students in the IT sector. Each program is usually 1 and a half years long with 4 quarters, each quarter 13 weeks long. First three quarters of each program are general where the students learn Web 2.0 and the necessary technologies to start earning money. Following the first three quarters, specific courses depending on the program start All material of panaverse is open source and publicly available on Github. This is solely to improve Pakistan and not bar anyone from education as education is a basic human right. Moreover, all funds are managed by Panaverse &quote; s strategic partner Saylani Welfare which is one of the most trusted NGOs of Pakistan. Saylani has strict audit processes already in place to ensure proper accountability of funds
        </Text>
      </Box>    

    </Box>
  )
}
