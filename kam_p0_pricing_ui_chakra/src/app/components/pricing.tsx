'use client';

import React from 'react'
import {Box, Flex, Button, Heading, Text, HStack,Icon, StackProps, Stack, StackItem} from '@chakra-ui/react'

import { CheckIcon } from './icons/icon';

export const ListItem = (propos: StackProps) => {

    const {children, ...rest} = propos;
    return(
        <HStack as={'li'} spacing={'20px'} {...rest} alignItems='start'>
            <Icon as={CheckIcon} w={'22px'} h={'22px'}></Icon>
            <Text textAlign={["left","left","center"]}>{children}</Text>
        </HStack>
    )
} 

export default function Pricing() {
  return (

    <Box mx='6'>
<Box borderRadius={'xl'} maxW={'1024px'} margin={'auto'} mt={'-64'} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'} overflow={'hidden'}>
        <Flex direction={["column","column","row"]}>
            <Box bg={'#F0EAFB'} textAlign='center' p={'16'}>
                <Text fontSize='2xl' fontWeight={'extrabold'}>
                    Premium PRO
                </Text>
                <Heading as='h3' fontSize={["5xl","5xl","6xl"]} fontWeight={800} pt={'4'} mb={'0'}>
                    $329
                </Heading>
                <Text pt={'4'}>
                    billed just once
                </Text>
                <Button colorScheme={'purple'} size={'lg'} width={'182px'} borderRadius={'md'} mt={'4'}>
                    Get Started
                </Button>
            </Box>

            <Box p={'16'} fontSize='lg' bg={'#FFFFFF'}>
                <Text>Access these features when you get this pricing package for your business.</Text>
                <Stack as="ul" spacing={'5'} pt={'6'}>
                    <ListItem>International calling and messaging API</ListItem>
                    <ListItem>Additional phone numbers</ListItem>
                    <ListItem>Automated messages via Zapier</ListItem>
                    <ListItem>24/7 support and consulting</ListItem>
                </Stack>
            </Box>
        </Flex>

    </Box>
    </Box>
    
  )
}
