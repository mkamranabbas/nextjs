import React from 'react'
import {Box,Text, HStack,Stack ,Icon, StackProps} from '@chakra-ui/react'

import { MoneyBackIcon, FeeIcon, ReSubIcon } from './icons/icon';

interface FeaturesProps extends StackProps{
    icon:ElementType;
}

function Feature(propos: FeaturesProps) {

    const {icon, children, ...rest} = propos;
    return(
        <HStack spacing={'6'} {...rest}>
            <Icon as={icon} boxSize={'12'}></Icon>
            <Text fontSize={'lg'} fontWeight={'bold'}>{children}</Text>
        </HStack>
    )
}


export function Features() {

    return(
        <Box maxW={'1024px'} m={'auto'} pt={'15'} pb={'8'} as='section'>
            <Stack  p={'12'} spacing={'5'} direction={["column","column","row"]}>
                <Feature icon={MoneyBackIcon}>30 days money back Guarantee</Feature>
                <Feature icon={FeeIcon}>No setup fees 100% hassle-free</Feature>
                <Feature icon={ReSubIcon}>No monthly subscription Pay once and for all</Feature>
            </Stack >
        </Box>
    )
}