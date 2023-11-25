import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"45"} px={"16"} py={["16","8"]}>
        <Stack justifyContent={"center"} direction={["column","row"]} h={"full"} alignItems={"center"}>

        <VStack w={"full"} alignItems={["center","flex-start"]}>
        <Text fontWeight={"bold"}>About Us</Text>
        <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>We are the best crypto trading app in india, we provide our guidance at a very reasonable price</Text>
        </VStack>
        <VStack alignItems={"center"} justifyContent={"center"}>
            <a href='https://github.com/adarsht01' target='blank'>Github</a>
            <a href='https://auth.geeksforgeeks.org/user/adarshthakur1106/practice' target='blank'>GFG</a>

        </VStack>

        </Stack>
    </Box>
  )
}

export default Footer