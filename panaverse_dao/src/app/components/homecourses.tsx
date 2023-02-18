'use client';

import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex,Heading } from '@chakra-ui/react';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { GiArtificialIntelligence, GiRadioTower,GiBiohazard } from 'react-icons/gi';
import { SiHiveBlockchain } from 'react-icons/si';
import { FaCloud, FaNetworkWired } from 'react-icons/fa';
import { FcBiotech } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack verticalAlign='top' bg={'purple.50'} p={4}>
      <Flex textAlign={'center'} ml={'auto'} mr={'auto'}
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'pink.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text color={'purple.800'} fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function HomeCourses() {
  return (
    <Box maxW={'1024px'} m={'auto'} pt={'8'} pb={'8'} as='section' bg={'white'}>

      <Box textAlign={'center'} p={'4'}>
        
        <Heading as='h2' p={['2','2','2']} color={'black'} fontSize={["2xl","3xl","4xl"]} fontWeight={'extrabold'} fontFamily={'Inter'}>Core Courses</Heading>
        <Heading as='h3' p={['2','2','2']} color={'pink.500'} fontSize={["xl","xl","2xl"]} fontWeight={'bold'} fontFamily={'Inter'}>Following course are available currently.</Heading>
        
        
      </Box>

      <Box textAlign={'center'} p={'4'}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} alignContent={'top'} >

        <Feature
          icon={<Icon as={SiHiveBlockchain} w={10} h={10} color={'pink.600'} />}
          title={'Web 3.0 (Blockchain) and Metaverse Specialization'}
          text={
            'This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences...'
          }
        />

        <Feature
          icon={<Icon as={GiArtificialIntelligence} w={10} h={10} color={'pink.600'} />}
          title={'Artificial Intelligence (AI) and Deep Learning Specialization'}
          text={
            'The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models....'
          }
        />
        <Feature
          icon={<Icon as={AiOutlineCloudServer} w={10} h={10} color={'pink.600'} />}
          title={'Cloud-Native Computing Specialization'}
          text={
            'The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes...'
          }
        />
        
        <Feature
          icon={<Icon as={GiRadioTower} w={10} h={10} color={'pink.600'} />}
          title={'Ambient Computing and IoT Specialization'}
          text={
            'The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices...'
          }
        />

      
        <Feature
          icon={<Icon as={GiBiohazard} w={10} h={10} color={'pink.600'} />}
          title={'Genomics and Bioinformatics Specialization'}
          text={
            'Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data...'
          }
        />
        <Feature
          icon={<Icon as={FaNetworkWired} w={10} h={10} color={'pink.600'} />}
          title={'Network Programmability and Automation Specialization'}
          text={
            'More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile...'
          }
        />
      </SimpleGrid>
      </Box>
    </Box>
  );
}